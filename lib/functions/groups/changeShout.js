const Routes = require('../../util/Routes.js');

module.exports = async function(message) {
  try {
    const { data: response } = await this.zoblox.session.patch(Routes.groups.changeStatus(this.id), { body: { message }});    
    return response;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
} 