module.exports = async function({ limit, sortOrder, cursor } = {}) {
  try {
    limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: WallPosts } = await this.zoblox.session.get(this.zoblox.Routes.groups.WallPosts(this.id, limit, sortOrder, cursor));
    WallPosts.data.map((WallPost) => {
      WallPost.created = new Date(WallPost.created);
      WallPost.updated = new Date(WallPost.updated);
    });
    return WallPosts;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}