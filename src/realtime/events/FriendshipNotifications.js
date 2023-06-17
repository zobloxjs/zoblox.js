const WebSocketEvents = require('../../util/WebSocketEvents.js');
const WebSocketTypes = require('../../util/types/WebSocketTypes.js');
const Events = require('../../util/Events.js');

module.exports = {
  name: WebSocketEvents.FriendshipNotifications,
  async function(zoblox, data) {
    if (data.Type === WebSocketTypes.FriendshipRequested) {
      zoblox.me.emit(Events.FriendRequest, data);
    } else if (data.Type === WebSocketTypes.FriendshipDeclined) {
      zoblox.me.emit(Events.RemoveFriendRequest, data);
    } 
  },
};