const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const response = await this.zoblox.rest.post(Routes.friends.acceptfriendrequest(this.id));
    return response;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}