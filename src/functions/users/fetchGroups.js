const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const { data: { data: Groups } } = await this.zoblox.rest.get(Routes.groups.userRoles(this.id));
    const GroupsMap = new Map(Groups.map((Group) => [Group.group.id, { ...Group }]));

    GroupsMap.toArray = function() {
      return Array.from(this.values());
    };
    
    return GroupsMap;
    
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}