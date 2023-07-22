const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const { data: resaleData } = await this.zoblox.rest.get(Routes.economy.assetResaleData(this.AssetId));
    resaleData.priceDataPoints.map((priceDataPoint) => {
      priceDataPoint.date = new Date(priceDataPoint.date);
    });
    resaleData.volumeDataPoints.map((volumeDataPoint) => {
      volumeDataPoint.date = new Date(volumeDataPoint.date);
    });
    return resaleData;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}