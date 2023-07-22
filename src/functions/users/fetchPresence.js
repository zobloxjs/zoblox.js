const Routes = require('../../util/Routes.js');
const PresenceTypes = require('../../util/types/PresenceTypes.js');

module.exports = async function() {
  try {
    let userPresenceStatus;
    const { data: lastOnline } = await this.zoblox.rest.post(Routes.presences.lastOnline, { data: { userIds: [this.id] } });
    const { data: { userPresences } } = await this.zoblox.rest.post(Routes.presences.users, { data: { userIds: [this.id] } });
    const userPresence = userPresences[0];
    const userPresenceType = userPresence.userPresenceType;
    
    if (userPresenceType === PresenceTypes.Offline) userPresenceStatus = 'Offline';
    if (userPresenceType === PresenceTypes.Online) userPresenceStatus = 'Online';
    if (userPresenceType === PresenceTypes.InGame) userPresenceStatus = 'InGame';
    if (userPresenceType === PresenceTypes.InStudio) userPresenceStatus = 'InStudio';
      
    return { 
      lastOnline: new Date(lastOnline.lastOnlineTimestamps[0].lastOnline), 
      userPresenceType, userPresenceStatus, 
      lastLocation: userPresence.lastLocation, 
      placeId: userPresence.placeId, 
      rootPlaceId: userPresence.rootPlaceId, 
      gameId: userPresence.gameId, 
      universeId: userPresence.universeId 
    };
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}