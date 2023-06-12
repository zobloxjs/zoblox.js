const Routes = require('../../util/Routes.js');

module.exports = async function({ assetType, limit, sortOrder, cursor } = {}) {
  try {
    if (!assetType) throw new Error('This request needs assetType property');
    limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Assets } = await this.zoblox.session.get(Routes.itemconfiguration.getAssets(this.id, assetType, limit, sortOrder, cursor));
    return Assets;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}