module.exports = function({ amount }, recurring = false, usePercentage = false) {
  return (require('../payouts.js').bind({ zoblox: this.zoblox, id: this.group.id })([{ recipientId: this.id, recipientType: 'User', amount }], recurring, usePercentage));
}