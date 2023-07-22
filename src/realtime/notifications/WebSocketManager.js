const Routes = require('../../util/Routes.js');
const WebSocketClient = require('signalr-client').client;
const WebSocket = require('./WebSocket.js');

class WebSocketManager {
  constructor(zoblox, notifications) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    Object.defineProperty(this, 'notifications', { value: notifications });
  }
  connect() {
    const ws = new WebSocketClient(Routes.wss.notifications, ['usernotificationhub'], 3, true);
    
    ws.headers.Cookie = '.ROBLOSECURITY=' + this.zoblox.rest.Cookie;
    ws.serviceHandlers.connected = () => {};
    ws.start();
    
    return new WebSocket(this.zoblox, this.notifications, ws);
  } 
}
module.exports = WebSocketManager;