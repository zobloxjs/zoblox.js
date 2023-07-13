const Routes = require('../util/Routes.js');

class User {
  constructor(User, Profile, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = User.id;
    this.avatar = User.avatar;
    this.description = User.description;
    this.created = new Date(User.created);
    this.isBanned = User.isBanned;
    this.externalAppDisplayName = User.externalAppDisplayName;
    this.hasVerifiedBadge = User.hasVerifiedBadge;
    this.name = User.name;
    this.displayName = User.displayName;
    this.profile = Profile;
  }
  get createdTimestamp() {
    return +this.created;
  }
  
  get profileURL() {
    return Routes.users.profile(this.id);
  } 
  
  toString() {
    return this.profileURL;
  }
};
module.exports = User;