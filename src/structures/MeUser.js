const EventEmitter = require('node:events');
const Events = require('../util/Events.js');
const Routes = require('../util/Routes.js');

class MeUser extends EventEmitter {
  constructor(User, zoblox) {
    super();
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = User.UserID;
    this.username = User.UserName;
    this.robux = User.RobuxBalance;
    this.avatarURL = User.ThumbnailUrl;
    this.IsPremium = User.IsPremium;
    process.nextTick(() => zoblox.emit(Events.UserReady, zoblox));
  }
  get profileURL() {
    return Routes.users.profile(this.id);
  } 
  
  toString() {
    return this.profileURL;
  }
};
module.exports = MeUser;