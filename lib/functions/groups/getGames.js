module.exports = async function({ accessFilter, limit, sortOrder, cursor } = {}) {
  try {
    accessFilter = accessFilter || 'All', limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Games } = await this.zoblox.session.get(this.zoblox.Routes.games.groupGames(this.id, accessFilter, limit, sortOrder, cursor));
    Games.data.map((Game) => {
      Game.created = new Date(Game.created);
      Game.updated = new Date(Game.updated);
    });
    return Games;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}