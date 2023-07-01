module.exports = async function() {
  return await this.zoblox.groups.get(this.group.id).then(async (Groups) => await Groups.roles.get(this.role.id));
}