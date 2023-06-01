class GroupRole {
  constructor(RoleId, Role, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = RoleId;
    this.permissions = Role.permissions;
  }
};
module.exports = GroupRole;