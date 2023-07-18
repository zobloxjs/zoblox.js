const Routes = require('../../util/Routes.js');
const WebSocketClient = require('signalr-client').client;
const WebSocket = require('./WebSocket.js');

class WebSocketManager {
  constructor(zoblox, notifications) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    Object.defineProperty(this, 'notifications', { value: notifications });
    this.web = null;
    this.events = null;
  }
  connect() {
    const ws = new WebSocketClient(Routes.wss.notifications, ['usernotificationhub'], 3, true);
    ws.headers.Cookie = '.ROBLOSECURITY=' + this.zoblox.session.Cookie;
    ws.serviceHandlers.connected = () => {};
    ws.start();
    
    const websocket = new WebSocket(this.zoblox, this.notifications, ws);
    this.web = websocket.ws;
    this.events = websocket.events;

    return this;
  } 
}
module.exports = WebSocketManager;