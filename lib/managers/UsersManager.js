const PresencesTypes = require('../util/types/PresencesTypes.js');
const getAvatar = require('../methods/generatorAvatar.js');
const User = require('../structures/User.js');

class UsersManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async find({ userIds, userNames, excludeBannedUsers = false }) {
    try {
      if (userIds) {
        if (Array.isArray(userIds)) {
          const { data: response } = await this.zoblox.session.post(this.zoblox.Routes.users.users(''), {
            body: { userIds, excludeBannedUsers },
          });
          if (!response.data.length) throw new Error('Invalid User');
          return response.data;
        } else if (!Array.isArray(userIds)) {
          const { data: response } = await this.zoblox.session.post(this.zoblox.Routes.users.users(''), {
            body: { userIds: [userIds], excludeBannedUsers },
          });
          if (!response.data[0]) throw new Error('Invalid User');
          return response.data[0];
        }
      } else if (userNames) {
        if (Array.isArray(userNames)) {
          const { data: response } = await this.zoblox.session.post(this.zoblox.Routes.users.usernames, {
            body: { usernames: userNames, excludeBannedUsers },
          });
          if (!response.data.length) throw new Error('Invalid User');
          return response.data;
        } else if (!Array.isArray(userNames)) {
          const { data: response } = await this.zoblox.session.post(this.zoblox.Routes.users.usernames, {
            body: { usernames: [userNames], excludeBannedUsers },
          });
          if (!response.data[0]) throw new Error('Invalid User');
          return response.data[0];
        }
      }
    } catch {
      return null;
    }
  }
  
  async get(userId) {
    try {
      let userPresenceStatus;
      const Profile = {};      
      const { data: user } = await this.zoblox.session.get(this.zoblox.Routes.users.users(userId));
      const { data: friends } = await this.zoblox.session.get(this.zoblox.Routes.friends.friendsCount(user.id));
      const { data: followings } = await this.zoblox.session.get(this.zoblox.Routes.friends.followingsCount(user.id));
      const { data: followers } = await this.zoblox.session.get(this.zoblox.Routes.friends.followersCount(user.id));
      const { data: { data: Groups } } = await this.zoblox.session.get(this.zoblox.Routes.groups.userRoles(user.id));
      const { data: lastOnline } = await this.zoblox.session.post(this.zoblox.Routes.presences.lastOnline, { body: {'userIds': [userId] }});
      const { data: { userPresences } } = await this.zoblox.session.post(this.zoblox.Routes.presences.users, { body: {'userIds': [userId] }});
      const userPresence = userPresences[0];
      const userPresenceType = userPresence.userPresenceType;
      if (userPresenceType === PresencesTypes.Offline) userPresenceStatus = 'Offline';
      if (userPresenceType === PresencesTypes.Online) userPresenceStatus = 'Online';
      if (userPresenceType === PresencesTypes.InGame) userPresenceStatus = 'InGame';
      if (userPresenceType === PresencesTypes.InStudio) userPresenceStatus = 'InStudio';
      //
      user.avatar = await getAvatar(userId);
      user.presence = { lastOnline: new Date(lastOnline.lastOnlineTimestamps[0].lastOnline), userPresenceType, userPresenceStatus, lastLocation: userPresence.lastLocation, placeId: userPresence.placeId, rootPlaceId: userPresence.rootPlaceId, gameId: userPresence.gameId, universeId: userPresence.universeId };
      Profile.friendsCount = friends.count;
      Profile.followingsCount = followings.count;
      Profile.followersCount = followers.count;
      //
      return new User(user, Profile, Groups, this.zoblox);
    } catch {
      return null;
    }
  }
};
module.exports = UsersManager;