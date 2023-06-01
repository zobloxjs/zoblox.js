module.exports = async function({ userId, actionType, limit, sortOrder, cursor } = {}) {
  try {
    userId = userId || '', actionType = actionType || '', limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Logs } = await this.zoblox.session.get(this.zoblox.Routes.groups.AuditLog(this.id, userId, actionType, limit, sortOrder, cursor));
    Logs.data.map((Log) => {
      Log.created = new Date(Log.created);
    });
    return Logs;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}