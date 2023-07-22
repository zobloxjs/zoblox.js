const Routes = require('../../util/Routes.js');

module.exports = async function(userId) {
  try {
    const response = await this.zoblox.rest.post(Routes.groups.changeOwner(this.id), { data: { userId } });      
    return response;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}