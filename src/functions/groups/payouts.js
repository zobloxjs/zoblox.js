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
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}