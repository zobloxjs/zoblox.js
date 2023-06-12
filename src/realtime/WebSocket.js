const fs = require('node:fs');
const path = require('node:path');

class WebSocket {
  constructor(zoblox, ws) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.ws = ws;
    this.events = this.importEvents();
    this.setupEvents();
  }
  importEvents() {
    const eventPath = path.join(__dirname, 'events');
    const files = fs.readdirSync(eventPath);
    const events = files.map(file => require(path.join(eventPath, file)));
    return events;
  }

  setupEvents() {
    this.ws.on('usernotificationhub', 'notification', (name, message) => {
      const eventType = name;
      const eventData = JSON.parse(message);
      
      const event = this.events.find(event => event.name === eventType);
      
      if (event) {
        event.function(this.zoblox, eventData);
      }
    });
  }
}
module.exports = WebSocket;