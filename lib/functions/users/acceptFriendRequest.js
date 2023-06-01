module.exports = async function() {
  try {
    const response = await this.zoblox.session.post(this.zoblox.Routes.friends.acceptfriendrequest(this.id));
    return response;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}