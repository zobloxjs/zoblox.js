const Routes = require('../util/Routes.js');
const GroupMember = require('../structures/GroupMember.js');

class GroupMembersManager {
  constructor(Group, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.group = Group;
    this.id = Group.id;
    this.zoblox.me ? this.me = this.get(this.zoblox.me.id) : this.me = null;
  }
  async fetch({ roleId, limit, sortOrder, cursor } = {}) {
    try {
      roleId = roleId || '', limit = limit || 100, sortOrder = sortOrder || 'Desc', cursor = cursor || '';
      const { data: Members } = await this.zoblox.session.get(Routes.groups.players(this.id, roleId, limit, sortOrder, cursor));
      return Members;
    } catch (e) {
      if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (!e.response) throw new Error(e.message);
    }
  }
  
  async get(userId) {
    const User = await this.zoblox.users.get(userId);
    const Groups = User.groups;
    const Group = Groups.find(e => e.group.id == this.id);
    if (!Group) return null;
    return new GroupMember(this.zoblox, userId, this.group, Group);
  }
};
module.exports = GroupMembersManager;