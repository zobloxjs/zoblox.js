const GroupRequest = require('../structures/GroupRequest.js');

class RequestsManager {
  constructor(GroupId, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = GroupId;
  }
  async fetch({ sortOrder, limit, cursor } = {}) {
    try {
      sortOrder = sortOrder || 'Asc', limit = limit || 100, cursor = cursor || '';
      const { data: joinRequests } = await this.zoblox.session.get(this.zoblox.Routes.groups.joinRequests(this.id, limit, sortOrder, cursor));
      joinRequests.data.map((joinRequest) => {
        joinRequest.created = new Date(joinRequest.created);
      });
      return joinRequests;
    } catch (e) {
      if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (!e.response) throw new Error(e.message);
    }
  } 
  
  async get(UserId) {
    try {
      const { data: Request } = await this.zoblox.session.get(this.zoblox.groups.request(this.id, UserId));
      if (!Request) return null;
      return new GroupRequest(this.id, Request, this.zoblox);
    } catch (e) {
      if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (!e.response) throw new Error(e.message);
    } 
  }
};
module.exports = RequestsManager;