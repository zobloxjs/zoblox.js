const Routes = require('../util/Routes.js');
const fetchLogo = require('../methods/fetchLogo.js');
const Group = require('../structures/Group.js');

class GroupsManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async search({ keyword, prioritizeExactMatch, firstGroup, limit, cursor }) {
    try {
      prioritizeExactMatch = prioritizeExactMatch || false, firstGroup = firstGroup || false, limit = limit || '', cursor = cursor || '';
      const { data: Groups } = await this.zoblox.session.get(Routes.groups.search(keyword, prioritizeExactMatch, limit, cursor));
      Groups.data.map((Group) => {
        Group.created = new Date(Group.created);
        Group.updated = new Date(Group.updated);
      });
      return firstGroup ? Groups.data[0] : Groups;
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  } 
  
  async get(groupId) {
    try {
      const { data: GroupData } = await this.zoblox.session.get(Routes.groups.group(groupId));
      if (GroupData.shout) {
        GroupData.shout.created = new Date(GroupData.shout.created);
        GroupData.shout.updated = new Date(GroupData.shout.updated);
      }
      GroupData.logo = await fetchLogo(groupId);
      return new Group(GroupData, this.zoblox);
    } catch (e) {
      if (e.response && e.response.status === 400) return null;
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
};
module.exports = GroupsManager;