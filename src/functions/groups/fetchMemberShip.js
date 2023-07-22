const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const { data: MemberShip } = await this.zoblox.rest.get(Routes.groups.membership(this.id));
    return MemberShip;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}