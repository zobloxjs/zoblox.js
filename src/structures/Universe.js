class Universe {
  constructor(Universe, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = Universe.id;
    this.rootPlaceId = Universe.rootPlaceId;
    this.name = Universe.name;
    this.description = Universe.description;
    this.sourceName = Universe.sourceName;
    this.sourceDescription = Universe.sourceDescription;
    this.creator = Universe.creator;
    this.price = Universe.price;
    this.allowedGearGenres = Universe.allowedGearGenres;
    this.allowedGearCategories = Universe.allowedGearCategories;
    this.isGenreEnforced = Universe.isGenreEnforced;
    this.copyingAllowed = Universe.copyingAllowed;
    this.playing = Universe.playing;
    this.visits = Universe.visits;
    this.maxPlayers = Universe.maxPlayers;
    this.created = new Date(Universe.created);
    this.updated = new Date(Universe.updated);
    this.studioAccessToApisAllowed = Universe.studioAccessToApisAllowed;
    this.createVipServersAllowed = Universe.createVipServersAllowed;
    this.universeAvatarType = Universe.universeAvatarType;
    this.genre = Universe.genre;
    this.isAllGenre = Universe.isAllGenre;
    this.isFavoritedByUser = Universe.isFavoritedByUser;
    this.favoritedCount = Universe.favoritedCount;
  }
  get createdTimestamp() {
    return +this.created;
  }
};
module.exports = Universe;