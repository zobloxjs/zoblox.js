const Routes = require('../util/Routes.js');
const GroupRole = require('../structures/GroupRole.js');

class GroupRolesManager {
  constructor(GroupId, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = GroupId;
  }
  async permissions() {
    try {
      const { data: RolesPermissions } = await this.zoblox.session.get(Routes.groups.rolesPermissions(this.id));
      return RolesPermissions;
    } catch (e) {
      if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (!e.response) throw new Error(e.message);
    }
  } 
  
  async fetch() {
    try {
      const { data: Roles } = await this.zoblox.session.get(Routes.groups.roles(this.id));
      return Roles;
    } catch (e) {
      if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (!e.response) throw new Error(e.message);
    }
  }
  
  async find({ roleId, roleName }) {
    try {
      if (roleId) {
        const Roles = await this.fetch();
        const Role = Roles.roles.find(role => role.id === +roleId);
        return Role || null;
      } else if (roleName) {
        const Roles = await this.fetch();
        const Role = Roles.roles.find(role => role.name === roleName);
        return Role || null;
      } 
    } catch (e) {
      throw new Error(e.message);
    }
  }
  
  async get(roleId) {
    try {
      const { data: RolePermissions } = await this.zoblox.session.get(Routes.groups.rolePermissions(this.id, roleId));
      return new GroupRole(roleId, RolePermissions);
    } catch (e) {
      if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
      if (!e.response) throw new Error(e.message);
    }
  }
};
module.exports = GroupRolesManager;