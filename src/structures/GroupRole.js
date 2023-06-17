class GroupRole {
  constructor(Group, RoleId, Role, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.group = Group;
    this.id = RoleId;
    this.permissions = Role.permissions;
  }
};
module.exports = GroupRole;