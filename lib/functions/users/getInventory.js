module.exports = async function({ assetTypes, limit, sortOrder, cursor } = {}) {
  try {
    if (!assetTypes) throw new Error('This request needs assetTypes property');
    assetTypes = Array.isArray(assetTypes) ? assetTypes.join(',') : assetTypes, limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Inventory } = await this.zoblox.session.get(this.zoblox.Routes.inventory.users(this.id, assetTypes, limit, sortOrder, cursor));
    Inventory.data.map((asset) => {
      asset.created = new Date(asset.created);
    });
    return Inventory;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}