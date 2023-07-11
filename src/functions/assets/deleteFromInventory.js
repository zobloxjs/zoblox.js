const Routes = require('../../util/Routes.js');

module.exports = async function() {
  const { data: response } = await this.zoblox.session.post(Routes.deleteFromInventory, {
    data: 'assetId=' + this.AssetId, 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
  if (!response.isValid) throw new Error(response.error);
  return response;
}