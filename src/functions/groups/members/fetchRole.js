module.exports = function() {
  return this.zoblox.groups.get(this.group.id).then((Group) => Group.roles.get(this.role.id));
}