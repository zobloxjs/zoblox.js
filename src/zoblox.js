const EventEmitter = require('node:events');
const defaults = require('./util/Defaults.js');
const Client = require('./realtime/Client.js');
const UsersManager = require('./managers/UsersManager.js');
const GroupsManager = require('./managers/GroupsManager.js');
const GamesManager = require('./managers/GamesManager.js');
const AssetsManager = require('./managers/AssetsManager.js');
const MeUser = require('./structures/MeUser.js');
const REST = require('./rest/RESTManager.js');

class Zoblox extends EventEmitter {
  constructor(options = {}) {
    super();
    Object.defineProperty(this, 'rest', { value: new REST({ timeout: options.requestTimeout ?? defaults.requestTimeout }) });
    this.client = new Client(this);
    this.users = new UsersManager(this);
    this.groups = new GroupsManager(this);
    this.games = new GamesManager(this);
    this.assets = new AssetsManager(this);
    this.me = null;
  }
  async login(Cookie) {
    await this.rest.setCookie(Cookie);
    const user = await this.fetchCurrentUser();
      
    this.me = new MeUser(user, this);
      
    return this.me;
  }
  
  destroy() {
    delete this.rest.headers['Cookie'];
    delete this.rest.headers['X-CSRF-TOKEN'];
    delete this.rest.Cookie;
    delete this.rest.XcsrfToken;
  }
};
module.exports = Zoblox;