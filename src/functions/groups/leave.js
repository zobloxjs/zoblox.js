module.exports = function() {
  return (require('./members/kick.js').call({ zoblox: this.zoblox, group: { id: this.id }, id: this.zoblox.me?.id }));
}