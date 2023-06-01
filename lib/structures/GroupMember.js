class GroupMember {
  constructor(GroupMember, UserId, Group, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.group = Group;
    this.role = GroupMember.role;
    this.groupId = GroupMember.group.id;
    this.id = UserId;
  }
};
module.exports = GroupMember;