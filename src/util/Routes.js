const https = 'https://';
const wss = 'wss://';
const www = https + 'www.';
const robloxDomain = 'roblox.com';
const host = www + robloxDomain + '/';

module.exports = {
  me: host + 'mobileapi/userinfo', 
  logout: https + 'auth.roblox.com/v2/logout',
  wss: {
    notifications: wss + 'realtime.roblox.com/notifications', 
  }, 
  users: {
    profile: (UserId) => host + 'users/' + UserId, 
    usernames: https + 'users.roblox.com/v1/usernames/users', 
    users: (UserId) => https + 'users.roblox.com/v1/users/' + UserId, 
    description: https + 'users.roblox.com/v1/description', 
    birthdate: https + 'users.roblox.com/v1/birthdate', 
    gender: https + 'users.roblox.com/v1/gender', 
  }, 
  thumbnails: {
    groups: (Url) => https + 'thumbnails.roblox.com/v1/groups/icons' + Url, 
    batch: https + 'thumbnails.roblox.com/v1/batch', 
    users: {
      headshot: (Url) => https + 'thumbnails.roblox.com/v1/users/avatar-headshot' + Url, 
      body: (Url) => https + 'thumbnails.roblox.com/v1/users/avatar' + Url, 
    }
  }, 
  avatar: {
    wear: (AssetId) => https + 'avatar.roblox.com/v1/avatar/assets/' + AssetId + '/wear', 
    remove: (AssetId) => https + 'avatar.roblox.com/v1/avatar/assets/' + AssetId + '/remove', 
  }, 
  presences: {
    lastOnline: https + 'presence.roblox.com/v1/presence/last-online', 
    users: https + 'presence.roblox.com/v1/presence/users', 
  }, 
  accountsettings: {
    block: (UserId) => https + 'accountsettings.roblox.com/v1/users/' + UserId + '/block',
    unblock: (UserId) => https + 'accountsettings.roblox.com/v1/users/' + UserId + '/unblock', 
  }, 
  chat: {
    sendmessage: https + 'chat.roblox.com/v2/send-message', 
  }, 
  economy: {
    currency: (GroupId) => https + 'economy.roblox.com/v1/groups/' + GroupId + '/currency', 
    revenueSummary: (GroupId, timeFrame) => https + 'economy.roblox.com/v1/groups/' + GroupId + '/revenue/summary/' + timeFrame, 
    groupTransactions: (GroupId, transactionType, limit, sortOrder, cursor) => https + 'economy.roblox.com/v2/groups/' + GroupId + '/transactions?transactionType=' + transactionType + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    userTransactions: (UserId, transactionType, limit, sortOrder, cursor) => https + 'economy.roblox.com/v2/users/' + UserId + '/transactions?transactionType=' + transactionType + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    assetDetails: (AssetId) => https + 'economy.roblox.com/v2/assets/' + AssetId + '/details', 
    purchasesProduct: (ProductId) => https + 'economy.roblox.com/v1/purchases/products/' + ProductId, 
    resaleData: (AssetId) => https + 'economy.roblox.com/v1/assets/' + AssetId + '/resale-data', 
    resellers: (AssetId, limit, cursor) => https + 'economy.roblox.com/v1/assets/' + AssetId + '/resellers?limit=' + limit + '&cursor=' + cursor
  },
  accountinformation: {
    promisesChannels: (UserId) => https + 'accountinformation.roblox.com/v1/users/' + UserId + '/promotion-channels', 
  }, 
  itemconfiguration: {
    getAssets: (GroupId, assetType, limit, sortOrder, cursor) => https + 'itemconfiguration.roblox.com/v1/creations/get-assets?groupId=' + GroupId + '&assetType=' + assetType + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
  }, 
  develop: {
    places: (PlaceId, type, granularity) => https + 'develop.roblox.com/v1/places/' + PlaceId + '/stats/' + type + '?granularity=' + granularity, 
  }, 
  badges: {
    users: (UserId, limit, sortOrder, cursor) => https + 'badges.roblox.com/v1/users/' + UserId + '/badges?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    universes: (UniverseId, limit, sortOrder, cursor) => https + 'badges.roblox.com/v1/universes/' + UniverseId + '/badges?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
  },
  inventory: {
    users: (UserId, assetTypes, limit, sortOrder, cursor) => https + 'inventory.roblox.com/v2/users/' + UserId + '/inventory?assetTypes=' + assetTypes + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
  },
  groups: {
    link: (GroupId) => host + 'groups/' + GroupId, 
    payouts: (GroupId, recurring) => https + 'groups.roblox.com/v1/groups/' + GroupId + `/payouts${recurring ? '/recurring' : '/'}`, 
    userRoles: (UserId) => https + 'groups.roblox.com/v2/users/' + UserId + '/groups/roles',
    settings: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/settings', 
    group: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId, 
    users: (GroupId, UserId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/users/' + UserId, 
    joinRequests: (GroupId, limit, sortOrder, cursor) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/join-requests?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    request: (GroupId, UserId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/join-requests/users/' + UserId, 
    changeOwner: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/change-owner', 
    roles: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles', 
    role: (GroupId, RoleId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/rolesets/' + RoleId, 
    rolePermissions: (GroupId, RoleId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles/' + RoleId + '/permissions', 
    rolesPermissions: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles/permissions', 
    roleCreate: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/rolesets/create', 
    description: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/description', 
    name: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/name', 
    status: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/status', 
    icon: (GroupId) => https + 'groups.roblox.com/v1/groups/icon?groupId=' + GroupId, 
    wallPost: (GroupId, PostId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/wall/posts/' + PostId, 
    wallPostUser: (GroupId, UserId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/wall/users/' + UserId + '/posts', 
    players: (GroupId, RoleId, limit, sortOrder, cursor) => RoleId !== '' ? https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles/' + RoleId + '/users?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor : https + 'groups.roblox.com/v1/groups/' + GroupId + '/users?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    search: (keyword, prioritizeExactMatch, limit, cursor) => https + 'groups.roblox.com/v1/groups/search?keyword=' + keyword + '&prioritizeExactMatch=' + prioritizeExactMatch + '&limit=' + limit + '&cursor=' + cursor,
    create: https + 'groups.roblox.com//v1/groups/create', 
    SocialLinks: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/social-links', 
    AuditLog: (GroupId, UserId, actionType, limit, sortOrder, cursor) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/audit-log?userId=' + UserId + '&actionType=' + actionType + '&limit=' + limit + '&sortOrder=' + sortOrder, 
    WallPosts: (GroupId, limit, sortOrder, cursor) => https + 'groups.roblox.com/v2/groups/' + GroupId + '/wall/posts?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor
  }, 
  games: {
    groupGames: (GroupId, accessFilter, limit, sortOrder, cursor) => https + 'games.roblox.com/v2/groups/' + GroupId + '/games?accessFilter=' + accessFilter + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    userGames: (UserId, accessFilter, limit, sortOrder, cursor) => https + 'games.roblox.com/v2/users/' + UserId + '/games?accessFilter=' + accessFilter + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    userFavoriteGames: (UserId, accessFilter, limit, sortOrder, cursor) => https + 'games.roblox.com/v2/users/' + UserId + '/favorite/games?accessFilter=' + accessFilter + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    universes: (IDs) => https + 'games.roblox.com/v1/games?universeIds=' + IDs, 
    passes: (UniverseId, limit, sortOrder, cursor) => https + 'games.roblox.com/v1/games/' + UniverseId +' /game-passes?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    SocialLinks: (UniverseId) => https + 'games.roblox.com/v1/games/' + UniverseId + '/social-links/list', 
  }, 
  friends: {
    friendsCount: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/friends/count', 
    followingsCount: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/followings/count',
    followersCount: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/followers/count',
    follow: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/follow', 
    unfollow: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/unfollow', 
    requestfriendship: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/request-friendship',
    unfriend: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/unfriend',
    acceptfriendrequest: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/accept-friend-request',
    declinefriendrequest: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/decline-friend-request',
    declineall: https + 'friends.roblox.com/v1/user/friend-requests/decline-all', 
    friendsRequests: (limit, sortOrder, cursor) => https + 'friends.roblox.com/v1/my/friends/requests' + '?limit=' + limit + '&sortOrder=' + sortOrder + '?cursor=' + cursor, 
    friends: (UserId) => https + 'friends.roblox.com/v1/users/' + UserId + '/friends' 
  }, 
  RbxThumbnailURL: https + 'tr.rbxcdn.com/', 
  updateGamePass: host + 'game-pass/update', 
  deleteFromInventory: host + 'asset/delete-from-inventory', 
  assetsLink: (AssetId) => host + 'catalog/' + AssetId, 
  RobloxDomain: robloxDomain 
};