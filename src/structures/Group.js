const GroupsMembersManager = require('../managers/GroupMembersManager.js');
const GroupsRequestsManager = require('../managers/GroupRequestsManager.js');
const GroupRolesManager = require('../managers/GroupRolesManager.js');
const Routes = require('../util/Routes.js');

class Group {
  constructor(Group, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.members = new GroupsMembersManager(Group, zoblox);
    this.requests = new GroupsRequestsManager(Group, zoblox);
    this.roles = new GroupRolesManager(Group, zoblox);
    this.id = Group.id;
    this.name = Group.name;
    this.logo = Group.logo;
    this.description = Group.description;
    this.owner = Group.owner;
    this.shout = Group.shout;
    this.memberCount = Group.memberCount;
    this.isBuildersClubOnly = Group.isBuildersClubOnly;
    this.publicEntryAllowed = Group.publicEntryAllowed;
    this.hasVerifiedBadge = Group.hasVerifiedBadge;
  }
  get linkURL() {
    return Routes.groups.link(this.id);
  } 

  toString() {
    return this.linkURL;
  }
};
module.exports = Group;