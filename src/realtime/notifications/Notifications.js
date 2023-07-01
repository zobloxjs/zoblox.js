const EventEmitter = require('node:events');
const WebSocketManager = require('./WebSocketManager.js');

class Notification extends EventEmitter {
  constructor(zoblox) {
    super();
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.ws = new WebSocketManager(zoblox, this);
  }
} 
module.exports = Notification;