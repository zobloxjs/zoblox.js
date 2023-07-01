const Routes = require('../../util/Routes.js');

module.exports = async function({ accessFilter, limit, sortOrder, cursor } = {}) {
  try {
    accessFilter = accessFilter || '', limit = limit || 50, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Favorite } = await this.zoblox.session.get(Routes.games.userFavoriteGames(this.id, accessFilter, limit, sortOrder, cursor));
    return Favorite;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  } 
}