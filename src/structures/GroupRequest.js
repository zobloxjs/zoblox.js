class GroupRequest {
  constructor(Group, Request, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.group = Group;
    this.requester = Request.requester;
    this.created = new Date(Request.created);
  }
  get createdTimestamp() {
    return +this.created;
  }
};
module.exports = GroupRequest;