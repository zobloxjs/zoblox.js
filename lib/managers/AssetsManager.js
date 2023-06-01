const Asset = require('../structures/Asset.js');

class AssetsManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async uploadItem() {
  } 
  
  async uploadModel() {
  } 
  
  async uploadAnimation() {
  } 
  
  async get(assetId) {
    try {
      const { data: Details } = await this.zoblox.session.get(this.zoblox.Routes.economy.assetDetails(assetId));
      Details.Created = new Date(Details.Created);
      Details.Updated = new Date(Details.Updated);
      return new Asset(Details, this.zoblox);
    } catch {
      return null;
    } 
  } 
};
module.exports = AssetsManager;