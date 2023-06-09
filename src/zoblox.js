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
    Object.defineProperty(this, 'session', { value: new REST({ timeout: options.requestTimeout ?? defaults.requestTimeout }) });
    this.client = new Client(this);
    this.users = new UsersManager(this);
    this.groups = new GroupsManager(this);
    this.games = new GamesManager(this);
    this.assets = new AssetsManager(this);
    this.me = null;
  }
  login(Cookie) {
    return this.session.setCookie(Cookie)
    .then(() => this.fetchCurrentUser()
    .then((User) => {
       this.me = new MeUser(User, this);
       return this.me;
    })) 
  }
  
  destroy() {
    delete this.session.headers['Cookie'];
    delete this.session.headers['X-CSRF-TOKEN'];
    delete this.session.Cookie;
    delete this.session.XcsrfToken;
  }
};
module.exports = Zoblox;