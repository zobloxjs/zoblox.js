const Routes = require('../../../util/Routes.js');

module.exports = async function({ limit, sortOrder, cursor } = {}) {
  try {
    limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Passes } = await this.zoblox.session.get(Routes.games.passes(this.id, limit, sortOrder, cursor));
    return Passes;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}