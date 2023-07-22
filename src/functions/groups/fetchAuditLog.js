const Routes = require('../../util/Routes.js');

module.exports = async function({ userId, actionType, limit, sortOrder, cursor } = {}) {
  try {
    userId = userId || '', actionType = actionType || '', limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Logs } = await this.zoblox.rest.get(Routes.groups.auditLog(this.id, userId, actionType, limit, sortOrder, cursor));
    Logs.data.map((Log) => {
      Log.created = new Date(Log.created);
    });
    return Logs;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}