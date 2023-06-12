const Routes = require('../../../util/Routes.js');

module.exports = async function(roleId) {
  try {
    const response = await this.zoblox.session.patch(Routes.groups.users(this.groupId, this.id), { body: { roleId }});    
    return response;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}