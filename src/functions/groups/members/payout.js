module.exports = function({ amount }, recurring = false, usePercentage = false) {
  return require('../payouts.js').call({ zoblox: this.zoblox, id: this.group.id }, [{ recipientId: this.id, recipientType: 'User', amount }], recurring, usePercentage);
}