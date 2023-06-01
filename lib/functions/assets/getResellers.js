module.exports = async function({ limit, cursor } = {}) {
  try {
    limit = limit || 100, cursor = cursor || '';
    const { data: Resellers } = await this.zoblox.session.get(this.zoblox.Routes.economy.resellers(this.AssetId, limit, cursor));
    return Resellers;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}