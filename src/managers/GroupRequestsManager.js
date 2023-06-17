const Routes = require('../util/Routes.js');
const GroupRequest = require('../structures/GroupRequest.js');

class RequestsManager {
  constructor(Group, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    Object.defineProperty(this, 'group', { value: Group });	
  }
  async fetch({ sortOrder, limit, cursor } = {}) {
    try {
      sortOrder = sortOrder || 'Asc', limit = limit || 100, cursor = cursor || '';
      const { data: Requests } = await this.zoblox.session.get(Routes.groups.joinRequests(this.group.id, limit, sortOrder, cursor));
      Requests.data.map((Request) => {
        Request.created = new Date(Request.created);
      });
      return Requests;
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  } 
  
  async get(UserId) {
    try {
      const { data: Request } = await this.zoblox.session.get(Routes.groups.request(this.group.id, UserId));
      return !Request ? null : new GroupRequest(this.group, Request, this.zoblox);
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    } 
  }
};
module.exports = RequestsManager;