const Routes = require('../util/Routes.js');
const fetchAvatar = require('../methods/fetchAvatar.js');
const User = require('../structures/User.js');

class UsersManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async find({ userIds, userNames, excludeBannedUsers = false }) {
    try {
      if (userIds) {
        if (userIds instanceof Array)  {
          const { data: response } = await this.zoblox.rest.post(Routes.users.users(''), {
            data: { userIds, excludeBannedUsers },
          });
         if (!response.data.length) return null;
          return response.data;
        } else {
          const { data: response } = await this.zoblox.rest.post(Routes.users.users(''), {
            data: { userIds: [userIds], excludeBannedUsers },
          });
          if (!response.data[0]) return null;
          return response.data[0];
        }
      } else if (userNames) {
        if (userNames instanceof Array) {
          const { data: response } = await this.zoblox.rest.post(Routes.users.usernames, {
            data: { usernames: userNames, excludeBannedUsers },
          });
        if (!response.data.length) return null;
          return response.data;
        } else {
          const { data: response } = await this.zoblox.rest.post(Routes.users.usernames, {
            data: { usernames: [userNames], excludeBannedUsers },
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
      const { data: user } = await this.zoblox.rest.get(Routes.users.users(userId));
      const { data: { count: friendsCount } } = await this.zoblox.rest.get(Routes.friends.friendsCount(user.id));
      const { data: { count: followingsCount } } = await this.zoblox.rest.get(Routes.friends.followingsCount(user.id));
      const { data: { count: followersCount } } = await this.zoblox.rest.get(Routes.friends.followersCount(user.id));

      user.avatar = await fetchAvatar(userId);
      profile.friendsCount = friendsCount;
      profile.followingsCount = followingsCount;
      profile.followersCount = followersCount;
      
      return new User(user, profile, this.zoblox);
    } catch (e) {
      if (e.response && e.response.status === 404) return null;
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
};
module.exports = UsersManager;