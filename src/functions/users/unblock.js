const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const response = await this.zoblox.session.post(Routes.accountsettings.unblock(this.id));
    return response;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  } 
}