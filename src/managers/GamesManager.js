const Routes = require('../util/Routes.js');
const Universe = require('../structures/Universe.js');
const GamePass = require('../structures/GamePass.js');

class GamesManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async gets(ids) {
    try {
      if (!Array.isArray(ids)) throw new Error('The IDs must be array');
      ids = ids.join(',');
      const { data: { data: Universes } } = await this.zoblox.session.get(Routes.games.universes(ids));
      Universes.map((Universe) => {
        Universe.created = new Date(Universe.created);
        Universe.updated = new Date(Universe.updated);
      });
      return Universes;
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    } 
  } 

  async get(id) {
    try {
      const UniverseData = await this.gets([id]);
      return UniverseData.length ? new Universe(UniverseData.pop(), this.zoblox) : null;
    } catch (err) {
      if (err.message === '400 No universe IDs were specified.') return null;
      throw new Error(err.message);
    }
  } 
  
  getPass(gamePassId) {
    return new GamePass(gamePassId, this.zoblox);
  } 
};
module.exports = GamesManager;