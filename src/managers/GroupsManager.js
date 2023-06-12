const Routes = require('../util/Routes.js');
const getLogo = require('../methods/generatorLogo.js');
const Group_ = require('../structures/Group.js');

class GroupsManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  async search({ keyword, prioritizeExactMatch, firstGroup, limit, cursor }) {
    try {
      if (!keyword) throw new Error('Required keyword: search words');
      prioritizeExactMatch = prioritizeExactMatch || false, firstGroup = firstGroup || false, limit = limit || '', cursor = cursor || '';
      const { data: Groups } = await this.zoblox.session.get(Routes.groups.search(keyword, prioritizeExactMatch, limit, cursor));
      Groups.data.map((Group) => {
        Group.created = new Date(Group.created);
        Group.updated = new Date(Group.updated);
      });
      return firstGroup ? Groups.data[0] : Groups;
    } catch (e) {
      if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (!e.response) throw new Error(e.message);
    }
  } 
  
  async get(groupId) {
    try {
      const { data: Group } = await this.zoblox.session.get(Routes.groups.group(groupId));
      if (Group.shout) {
        Group.shout.created = new Date(Group.shout.created);
        Group.shout.updated = new Date(Group.shout.updated);
      }
      Group.logo = await getLogo(groupId);
      return new Group_(Group, this.zoblox);
    } catch {
      return null;
    }
  }
};
module.exports = GroupsManager;