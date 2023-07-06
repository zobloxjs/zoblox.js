const Routes = require('../util/Routes.js');

class Asset {
  constructor(Asset, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.TargetId = Asset.TargetId;
    this.ProductType = Asset.ProductType;
    this.AssetId = Asset.AssetId;
    this.ProductId = Asset.ProductId;
    this.Name = Asset.Name;
    this.Description = Asset.Description;
    this.AssetTypeId = Asset.AssetTypeId;
    this.Creator = Asset.Creator;
    this.IconImageAssetId = Asset.IconImageAssetId;
    this.Created = new Date(Asset.Created);
    this.Updated = new Date(Asset.Updated);
    this.PriceInRobux = Asset.PriceInRobux;
    this.PriceInTickets = Asset.PriceInTickets;
    this.Sales = Asset.Sales;
    this.IsNew = Asset.IsNew;
    this.IsForSale = Asset.IsForSale;
    this.IsPublicDomain = Asset.IsPublicDomain;
    this.IsLimited = Asset.IsLimited;
    this.IsLimitedUnique = Asset.IsLimitedUnique;
    this.Remaining = Asset.Remaining;
    this.MinimumMembershipLevel = Asset.MinimumMembershipLevel;
    this.ContentRatingTypeId = Asset.ContentRatingTypeId;
    this.SaleAvailabilityLocations = Asset.SaleAvailabilityLocations;
    this.SaleLocation = Asset.SaleLocation;
    this.CollectibleItemId = Asset.CollectibleItemId;
    this.CollectibleProductId = Asset.CollectibleProductId;
  }
  get linkURL() {
    return Routes.assetsLink(this.AssetId);
  } 

  toString() {
    return this.linkURL;
  }
};
module.exports = Asset;