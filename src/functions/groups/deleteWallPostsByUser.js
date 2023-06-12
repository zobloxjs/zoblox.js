const Routes = require('../../util/Routes.js');

module.exports = async function(userId) {
  try {
    const response = await this.zoblox.session.delete(Routes.groups.wallPostUser(this.id, userId));
    return response;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}