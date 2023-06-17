const Routes = require('../util/Routes.js');
const PresencesTypes = require('../util/types/PresencesTypes.js');
const fetchAvatar = require('../methods/fetchAvatar.js');
const User = require('../structures/User.js');

class UsersManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async find({ userIds, userNames, excludeBannedUsers = false }) {
    try {
      if (userIds) {
        if (Array.isArray(userIds)) {
          const { data: response } = await this.zoblox.session.post(Routes.users.users(''), {
            body: { userIds, excludeBannedUsers },
          });
         if (!response.data.length) throw { status: 404 };
          return response.data;
        } else if (!Array.isArray(userIds)) {
          const { data: response } = await this.zoblox.session.post(Routes.users.users(''), {
            body: { userIds: [userIds], excludeBannedUsers },
          });
          if (!response.data[0]) throw { status: 404 };
          return response.data[0];
        }
      } else if (userNames) {
        if (Array.isArray(userNames)) {
          const { data: response } = await this.zoblox.session.post(Routes.users.usernames, {
            body: { usernames: userNames, excludeBannedUsers },
          });
        if (!response.data.length) throw { status: 404 };
          return response.data;
        } else if (!Array.isArray(userNames)) {
          const { data: response } = await this.zoblox.session.post(Routes.users.usernames, {
            body: { usernames: [userNames], excludeBannedUsers },
          });
        if (!response.data[0]) throw { status: 404 };
          return response.data[0];
        }
      }
    } catch (e) {
      if (e.status === 404) return null;
      if (e.response && e.response.data && e.response.data.errors && e.response.data.errors.length) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (e.response) throw new Error(`${e.response.status} ${e.response.statusText}`);
      if (!e.response) throw new Error(e.message);
    }
  }
  
  async get(userId) {
    try {
      let userPresenceStatus;
      const profile = {};      
      const { data: user } = await this.zoblox.session.get(Routes.users.users(userId));
      const { data: friends } = await this.zoblox.session.get(Routes.friends.friendsCount(user.id));
      const { data: followings } = await this.zoblox.session.get(Routes.friends.followingsCount(user.id));
      const { data: followers } = await this.zoblox.session.get(Routes.friends.followersCount(user.id));
      const { data: { data: groups } } = await this.zoblox.session.get(Routes.groups.userRoles(user.id));
      const { data: lastOnline } = await this.zoblox.session.post(Routes.presences.lastOnline, { body: { userIds: [userId] }});
      const { data: { userPresences } } = await this.zoblox.session.post(Routes.presences.users, { body: { userIds: [userId] }});
      const userPresence = userPresences[0];
      const userPresenceType = userPresence.userPresenceType;
      if (userPresenceType === PresencesTypes.Offline) userPresenceStatus = 'Offline';
      if (userPresenceType === PresencesTypes.Online) userPresenceStatus = 'Online';
      if (userPresenceType === PresencesTypes.InGame) userPresenceStatus = 'InGame';
      if (userPresenceType === PresencesTypes.InStudio) userPresenceStatus = 'InStudio';
      //
      user.avatar = await fetchAvatar(userId);
      user.presence = { lastOnline: new Date(lastOnline.lastOnlineTimestamps[0].lastOnline), userPresenceType, userPresenceStatus, lastLocation: userPresence.lastLocation, placeId: userPresence.placeId, rootPlaceId: userPresence.rootPlaceId, gameId: userPresence.gameId, universeId: userPresence.universeId };
      profile.friendsCount = friends.count;
      profile.followingsCount = followings.count;
      profile.followersCount = followers.count;
      //
      return new User(user, profile, groups, this.zoblox);
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
};
module.exports = UsersManager;