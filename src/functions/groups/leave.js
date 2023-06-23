module.exports = function() {
  return (require('./members/kick.js').bind({ zoblox: this.zoblox, groupId: this.id, id: this.zoblox.me?.id })());
}