const Routes = require('../../../util/Routes.js');

module.exports = async function(permissions) {
  try {
    const response = await this.zoblox.rest.patch(Routes.groups.rolePermissions(this.group.id, this.id), { 
      data: { permissions }
    });
    return response;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}