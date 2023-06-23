class GroupMember {
  constructor(UserId, Group, GroupMember, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = UserId;
    this.group = Group;
    this.role = GroupMember.role;
  }
};
module.exports = GroupMember;