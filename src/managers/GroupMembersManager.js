const Routes = require('../util/Routes.js');
const GroupMember = require('../structures/GroupMember.js');

class GroupMembersManager {
  constructor(Group, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    Object.defineProperty(this, 'group', { value: Group });
    Object.defineProperty(this, 'me', { value: this.zoblox.me ? this.get(this.zoblox.me.id) : null });
  }
  async fetch({ roleId, limit, sortOrder, cursor } = {}) {
    try {
      roleId = roleId || '', limit = limit || 100, sortOrder = sortOrder || 'Desc', cursor = cursor || '';
      const { data: Members } = await this.zoblox.session.get(Routes.groups.players(this.group.id, roleId, limit, sortOrder, cursor));
      return Members;
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
  
  async get(userId) {
    const Groups = await require('../functions/users/fetchGroups').bind({ zoblox: this.zoblox, id: userId })();
    const Group = Groups.find(e => e.group.id == this.group.id);
    return !Group ? null : new GroupMember(this.zoblox, userId, this.group, Group);
  }
};
module.exports = GroupMembersManager;