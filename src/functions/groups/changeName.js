const Routes = require('../../util/Routes.js');

module.exports = async function(name) {
  try {
    const { data: response } = await this.zoblox.session.patch(Routes.groups.name(this.id), { data: { name } });    
    return response;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
} 