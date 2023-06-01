module.exports = async function() {
  const Group = await this.zoblox.groups.get(this.id);
  const GroupMembers = Group.members;
  const GroupMemberMe = await GroupMembers.me;
  return await GroupMemberMe.kick();
}