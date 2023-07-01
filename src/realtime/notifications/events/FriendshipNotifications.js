const WebSocketEvents = require('../../../util/WebSocketEvents.js');
const WebSocketTypes = require('../../../util/types/WebSocketTypes.js');
const Events = require('../../../util/Events.js');

module.exports = {
  name: WebSocketEvents.FriendshipNotifications,
  async function(notifications, data) {
    if (data.Type === WebSocketTypes.FriendshipRequested) {
      notifications.emit(Events.FriendRequest, data.EventArgs.UserId1);
    } else if (data.Type === WebSocketTypes.FriendshipDeclined) {
      notifications.emit(Events.RemoveFriendRequest, data.EventArgs.UserId1);
    } 
  },
};