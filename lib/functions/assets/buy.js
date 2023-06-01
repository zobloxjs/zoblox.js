module.exports = async function() {
  const expectedPrice = this.PriceInRobux || 0;
  const expectedSellerId = this.Creator.Id;
  const { data: response } = await this.zoblox.session.post(this.zoblox.Routes.economy.purchasesProduct(this.ProductId), {
    body: {
      expectedCurrency: 1,
      expectedPrice,
      expectedSellerId
  }});
  if (!response.purchased) throw new Error(response.errorMsg);
  return response;
}