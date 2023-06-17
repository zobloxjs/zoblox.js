const Routes = require('../../util/Routes.js');

module.exports = async function({ timeFrame } = { timeFrame: 'Month' }) {
  try {
    timeFrame = timeFrame.toLowerCase();
    const { data: revenueSummary } = await this.zoblox.session.get(Routes.economy.revenueSummary(this.id, timeFrame));
    return revenueSummary;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}