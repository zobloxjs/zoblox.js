const Routes = require('../../util/Routes.js');

module.exports = async function({ limit, sortOrder, cursor } = {}) {
  try {
    limit = limit || '', sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Badges } = await this.zoblox.session.get(Routes.badges.users(this.id, limit, sortOrder, cursor));
    Badges.data.map((Badge) => {
      Badge.created = new Date(Badge.created);
      Badge.updated = new Date(Badge.updated);
    });
    return Badges;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}