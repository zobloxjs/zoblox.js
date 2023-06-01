module.exports = async function() {
  const { data: response } = await this.zoblox.session.post(this.zoblox.Routes.deleteFromInventory, {
    body: 'assetId=' + this.AssetId, 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }});
  if (!response.isValid) throw new Error(response.error);
  return response;
}