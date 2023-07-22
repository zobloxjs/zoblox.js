const Routes = require('../../util/Routes.js');

module.exports = async function({ limit, sortOrder, cursor } = {}) {
  try {
    limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: FriendRequests } = await this.zoblox.rest.get(Routes.friends.friendsRequests(limit, sortOrder, cursor));
    FriendRequests.data.map((FriendRequest) => {
      FriendRequest.created = new Date(FriendRequest.created);
    });
    return FriendRequests;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}