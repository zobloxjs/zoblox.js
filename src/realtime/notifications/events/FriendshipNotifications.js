const Events = require('../../../util/Events.js');

module.exports = {
  name: 'FriendshipNotifications',
  async function(notifications, data) {
    if (data.Type === 'FriendshipRequested') {
      notifications.emit(Events.FriendRequest, data.EventArgs.UserId1);
    } else if (data.Type === 'FriendshipDeclined') {
      notifications.emit(Events.RemoveFriendRequest, data.EventArgs.UserId1);
    } 
  },
};