const Notifications = require('./notifications/Notifications.js');

class Client {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.notifications = new Notifications(zoblox);
  }
  handleNotifications() {
    this.notifications.ws.connect();
  }
}
module.exports = Client;