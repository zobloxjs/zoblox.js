const Routes = require('../../util/Routes.js');

module.exports = async function({ accessFilter, limit, sortOrder, cursor } = {}) {
  try {
    accessFilter = accessFilter || 'All', limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Games } = await this.zoblox.session.get(Routes.games.groupGames(this.id, accessFilter, limit, sortOrder, cursor));
    Games.data.map((Game) => {
      Game.created = new Date(Game.created);
      Game.updated = new Date(Game.updated);
    });
    return Games;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}