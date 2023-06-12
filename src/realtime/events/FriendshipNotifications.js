const WebSocketEvents = require('../../util/WebSocketEvents.js');
const WebSocketTypes = require('../../util/types/WebSocketTypes.js');
const Events = require('../../util/Events.js');

module.exports = {
  name: WebSocketEvents.FriendshipNotifications,
  async function(zoblox, data) {
    if (data.Type === WebSocketTypes.FriendshipRequested) {
      const EventArgs = data.EventArgs;
      delete data.EventArgs;
      data.EventArgs = {};
      data.EventArgs.senderId = EventArgs.UserId1;
      data.EventArgs.recipientId = EventArgs.UserId2;
      data.EventArgs.SourceType = EventArgs.SourceType;
      zoblox.me.emit(Events.FriendRequest, data);
    } else if (data.Type === WebSocketTypes.FriendshipDeclined) {
      const EventArgs = data.EventArgs;
      delete data.EventArgs;
      data.EventArgs = {};
      data.EventArgs.deleterId = EventArgs.UserId1;
      data.EventArgs.recipientId = EventArgs.UserId2;
      data.EventArgs.SourceType = EventArgs.SourceType;
      zoblox.me.emit(Events.RemoveFriendRequest, data);
    } 
  },
};