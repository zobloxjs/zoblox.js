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
         if (!response.data.length) return null;
          return response.data;
        } else {
          const { data: response } = await this.zoblox.session.post(Routes.users.users(''), {
            body: { userIds: [userIds], excludeBannedUsers },
          });
          if (!response.data[0]) return null;
          return response.data[0];
        }
      } else if (userNames) {
        if (Array.isArray(userNames)) {
          const { data: response } = await this.zoblox.session.post(Routes.users.usernames, {
            body: { usernames: userNames, excludeBannedUsers },
          });
        if (!response.data.length) return null;
          return response.data;
        } else {
          const { data: response } = await this.zoblox.session.post(Routes.users.usernames, {
            body: { usernames: [userNames], excludeBannedUsers },
          });
        if (!response.data[0]) return null;
          return response.data[0];
        }
      }
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
  
  async get(userId) {
    try {
      const profile = {};      
      const { data: user } = await this.zoblox.session.get(Routes.users.users(userId));
      const { data: { count: friends } } = await this.zoblox.session.get(Routes.friends.friendsCount(user.id));
      const { data: { count: followings } } = await this.zoblox.session.get(Routes.friends.followingsCount(user.id));
      const { data: { count: followers } } = await this.zoblox.session.get(Routes.friends.followersCount(user.id));
      
      user.avatar = await fetchAvatar(userId);
      profile.friendsCount = friends;
      profile.followingsCount = followings;
      profile.followersCount = followers;
      
      return new User(user, profile, this.zoblox);
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
};
module.exports = UsersManager;