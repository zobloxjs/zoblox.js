const Routes = require('../../util/Routes.js');

module.exports = async function(Recipients, recurring = false, usePercentage = false) {
  try {
    const response = await this.zoblox.session.post(Routes.groups.payouts(this.id, recurring), {
      body: {
        PayoutType: recurring ? 'Percentage' : (usePercentage ? 'Percentage' : 'FixedAmount'),
        Recipients
      },
    });
    return response;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}