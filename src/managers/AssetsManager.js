const Routes = require('../util/Routes.js');
const Asset = require('../structures/Asset.js');

class AssetsManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async get(assetId) {
    try {
      const { data: Details } = await this.zoblox.rest.get(Routes.economy.assetDetails(assetId));
      return new Asset(Details, this.zoblox);
    } catch (e) {
      if (e.response && e.response.status === 400) return null;
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    } 
  } 
};
module.exports = AssetsManager;