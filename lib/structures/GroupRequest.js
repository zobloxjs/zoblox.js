class GroupRequests {
  constructor(Id, Request, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = Id;
    this.requester = Request.requester;
    this.created = Request.created;
  }
};
module.exports = GroupRequests;