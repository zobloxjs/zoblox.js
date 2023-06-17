class User {
  constructor(User, Profile, Groups, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = User.id;
    this.avatar = User.avatar;
    this.description = User.description;
    this.created = new Date(User.created);
    this.isBanned = User.isBanned;
    this.externalAppDisplayName = User.externalAppDisplayName;
    this.hasVerifiedBadge = User.hasVerifiedBadge;
    this.presence = User.presence;
    this.name = User.name;
    this.displayName = User.displayName;
    this.profile = Profile;
    this.groups = Groups;
  }
  toString() {
    return this.profileURL();
  }
};
module.exports = User;