const Routes = require('../util/Routes.js');
const WebSocketClient = require('signalr-client').client;
const WebSocket = require('./WebSocket.js');

class WebSocketManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.web = null;
    this.events = null;
  }
  connect() {
    const ws = new WebSocketClient(Routes.wss.notifications, ['usernotificationhub'], 3, true);
    ws.headers.Cookie = '.ROBLOSECURITY=' + this.zoblox.session.cookie;
    ws.serviceHandlers.connected = () => {}

    setTimeout(() => {
      ws.start();
    }, 10000);
    const websocket = new WebSocket(this.zoblox, ws);
    this.web = websocket.ws;
    this.events = websocket.events;

    return this;
  } 
}
module.exports = WebSocketManager;