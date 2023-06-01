module.exports = async function({ timeFrame } = { timeFrame: 'Month' }) {
  try {
    timeFrame = timeFrame.toLowerCase();
    const { data: revenueSummary } = await this.zoblox.session.get(this.zoblox.Routes.economy.revenueSummary(this.id, timeFrame));
    return revenueSummary;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}