class GroupMember {
  constructor(zoblox, UserId, Group, GroupMember) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = UserId;
    this.group = Group;
    this.role = GroupMember.role;
  }
};
module.exports = GroupMember;