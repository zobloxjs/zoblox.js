module.exports = async function() {
  try {
    const { data: { data: Friends } } = await this.zoblox.session.get(this.zoblox.Routes.friends.friends(this.id));
    Friends.map((Friend) => {
      Friend.created = new Date(Friend.created);
    });
    return Friends;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}