const EventEmitter = require('node:events');
const UsersManager = require('./managers/UsersManager.js');
const GroupsManager = require('./managers/GroupsManager.js');
const GamesManager = require('./managers/GamesManager.js');
const AssetsManager = require('./managers/AssetsManager.js');
const MeUser = require('./structures/MeUser.js');
const REST = require('./rest/RESTManager.js');
const WebSocket = require('./realtime/WebSocketManager.js');
const Routes = require('./util/Routes.js');
const Events = require('./util/Events.js');

class Zoblox extends EventEmitter {
  constructor() {
    super();
    Object.defineProperty(this, 'session', { value: new REST() });
    Object.defineProperty(this, 'ws', { value: new WebSocket(this) });
    this.users = new UsersManager(this);
    this.groups = new GroupsManager(this);
    this.games = new GamesManager(this);
    this.assets = new AssetsManager(this);
    this.me = null;
  }
  login(Cookie) {
    return this.session.setCookie(Cookie)
    .then(() => this.getCurrentUser()
    .then((user) => {
       this.me = new MeUser(user, this);
       //this.ws.connect();
       return this.me;
    })) 
  }
  
  destroy() {
    delete this.session.cookie;
    delete this.session.xcsrf;
    delete this.session.headers;
  }
};
module.exports = Zoblox;