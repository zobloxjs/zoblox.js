const Routes = require('../util/Routes.js');
const Asset = require('../structures/Asset.js');

class AssetsManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async get(assetId) {
    try {
      const { data: Details } = await this.zoblox.session.get(Routes.economy.assetDetails(assetId));
      Details.Created = new Date(Details.Created);
      Details.Updated = new Date(Details.Updated);
      return new Asset(Details, this.zoblox);
    } catch (e) {
      if (e.response && e.response.status === 400) return null;
      if (e.response && e.response.data && e.response.data.errors && e.response.data.errors.length) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (e.response) throw new Error(`${e.response.status} ${e.response.statusText}`);
      if (!e.response) throw new Error(e.message);
    } 
  } 
};
module.exports = AssetsManager;