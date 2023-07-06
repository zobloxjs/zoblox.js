const Routes = require('../util/Routes.js');
const GroupRole = require('../structures/GroupRole.js');

class GroupRolesManager {
  constructor(Group, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    Object.defineProperty(this, 'group', { value: Group });
  }
  async create(data) {
    try {
      const { data: Role } = await this.zoblox.session.post(Routes.groups.roleCreate(this.group.id), {
        data
      });
      return Role;
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  } 
  
  async fetchPermissions() {
    try {
      const { data: { data: RolesPermissions } } = await this.zoblox.session.get(Routes.groups.rolesPermissions(this.group.id));
      return RolesPermissions;
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  } 
  
  async fetch() {
    try {
      const { data: Roles } = await this.zoblox.session.get(Routes.groups.roles(this.group.id));
      return Roles;
    } catch (e) {
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
  
  async find({ roleId, roleName }) {
    try {
      if (roleId) {
        const Roles = await this.fetch();
        const Role = Roles.roles.find(role => role.id === +roleId);
        return Role ?? null;
      } else if (roleName) {
        const Roles = await this.fetch();
        const Role = Roles.roles.find(role => role.name === roleName);
        return Role ?? null;
      } 
    } catch (e) {
      throw new Error(e.message);
    }
  }
  
  async get(roleId) {
    try {
      const { data: RolePermissions } = await this.zoblox.session.get(Routes.groups.rolePermissions(this.group.id, roleId));
      return new GroupRole(this.group, roleId, RolePermissions, this.zoblox);
    } catch (e) {
      if (e.response && e.response.status === 400) return null;
      const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
      throw new Error(err);
    }
  }
};
module.exports = GroupRolesManager;