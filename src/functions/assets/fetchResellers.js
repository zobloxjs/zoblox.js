const Routes = require('../../util/Routes.js');

module.exports = async function({ limit, cursor } = {}) {
  try {
    limit = limit || 100, cursor = cursor || '';
    const { data: Resellers } = await this.zoblox.session.get(Routes.economy.assetResellers(this.AssetId, limit, cursor));
    return Resellers;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}