const Routes = require('../../util/Routes.js');

module.exports = async function({ limit, sortOrder, cursor } = {}) {
  try {
    limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: WallPosts } = await this.zoblox.rest.get(Routes.groups.wallPosts(this.id, limit, sortOrder, cursor));
    WallPosts.data.map((WallPost) => {
      WallPost.created = new Date(WallPost.created);
      WallPost.updated = new Date(WallPost.updated);
    });
    return WallPosts;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}