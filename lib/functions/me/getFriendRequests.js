const Routes = require('../../util/Routes.js');

module.exports = async function({ limit, sortOrder, cursor } = {}) {
  try {
    limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: FriendRequests } = await this.zoblox.session.get(Routes.friends.friendsRequests(limit, sortOrder, cursor));
    FriendRequests.data.map((FriendRequest) => {
      FriendRequest.created = new Date(FriendRequest.created);
    });
    return FriendRequests;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}