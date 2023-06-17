const Routes = require('../../util/Routes.js');

module.exports = async function({ assetTypes, limit, sortOrder, cursor }) {
  try {
    assetTypes = Array.isArray(assetTypes) ? assetTypes.join(',') : assetTypes, limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Inventory } = await this.zoblox.session.get(Routes.inventory.users(this.id, assetTypes, limit, sortOrder, cursor));
    Inventory.data.map((asset) => {
      asset.created = new Date(asset.created);
    });
    return Inventory;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}