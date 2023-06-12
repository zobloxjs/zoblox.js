module.exports = async function() {
  return (await require('./members/kick.js').bind({ zoblox: this.zoblox, groupId: this.id, id: this.zoblox.me.id })());
}