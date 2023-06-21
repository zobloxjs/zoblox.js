module.exports = async function() {
  return await this.zoblox.users.get(this.owner.userId);
}