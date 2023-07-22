const Routes = require('../../util/Routes.js');

module.exports = async function(message) {
  try {
    const { data: Shout } = await this.zoblox.rest.patch(Routes.groups.status(this.id), { data: { message } });    
    
    Shout.created = new Date(Shout.created);
    Shout.updated = new Date(Shout.updated);
    
    return Shout;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}