const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const { data: resaleData } = await this.zoblox.session.get(Routes.economy.resaleData(this.AssetId));
    resaleData.priceDataPoints.map((priceDataPoint) => {
      priceDataPoint.date = new Date(priceDataPoint.date);
    });
    resaleData.volumeDataPoints.map((volumeDataPoint) => {
      volumeDataPoint.date = new Date(volumeDataPoint.date);
    });
    return resaleData;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  } 
}