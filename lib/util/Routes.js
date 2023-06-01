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
    usernames: https + 'users.roblox.com/v1/usernames/users', 
    users: (UserId) => https + 'users.roblox.com/v1/users/' + UserId, 
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
  badges: {
    users: (UserId, limit, sortOrder, cursor) => https + 'badges.roblox.com/v1/users/' + UserId + '/badges?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
  },
  inventory: {
    users: (UserId, assetTypes, limit, sortOrder, cursor) => https + 'inventory.roblox.com/v2/users/' + UserId + '/inventory?assetTypes=' + assetTypes + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
  },
  groups: {
    payouts: (GroupId, recurring) => https + 'groups.roblox.com/v1/groups/' + GroupId + `/payouts${recurring ? '/recurring' : '/'}`, 
    userRoles: (UserId) => https + 'groups.roblox.com/v2/users/' + UserId + '/groups/roles',
    group: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId, 
    users: (GroupId, UserId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/users/' + UserId, 
    joinRequests: (GroupId, limit, sortOrder, cursor) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/join-requests?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    request: (GroupId, UserId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/join-requests/users/' + UserId, 
    changeOwner: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/change-owner', 
    roles: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles', 
    rolePermissions: (GroupId, RoleId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles/' + RoleId + '/permissions', 
    rolesPermissions: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles/permissions', 
    changeDescription: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/description', 
    changeName: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/name', 
    changeStatus: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/status', 
    wallPost: (GroupId, PostId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/wall/posts/' + PostId, 
    wallPostUser: (GroupId, UserId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/wall/users/' + UserId + '/posts', 
    players: (GroupId, RoleId, limit, sortOrder, cursor) => RoleId !== '' ? https + 'groups.roblox.com/v1/groups/' + GroupId + '/roles/' + RoleId + '/users?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor : https + 'groups.roblox.com/v1/groups/' + GroupId + '/users?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
    search: (keyword, prioritizeExactMatch, limit, cursor) => https + 'groups.roblox.com/v1/groups/search?keyword=' + keyword + '&prioritizeExactMatch=' + prioritizeExactMatch + '&limit=' + limit + '&cursor=' + cursor, 
    SocialLinks: (GroupId) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/social-links', 
    AuditLog: (GroupId, UserId, actionType, limit, sortOrder, cursor) => https + 'groups.roblox.com/v1/groups/' + GroupId + '/audit-log?userId=' + UserId + '&actionType=' + actionType + '&limit=' + limit + '&sortOrder=' + sortOrder, 
    WallPosts: (GroupId, limit, sortOrder, cursor) => https + 'groups.roblox.com/v2/groups/' + GroupId + '/wall/posts?limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor
  }, 
  games: {
    groupGames: (GroupId, accessFilter, limit, sortOrder, cursor) => https + 'games.roblox.com/v2/groups/' + GroupId + '/games?accessFilter=' + accessFilter + '&limit=' + limit + '&sortOrder=' + sortOrder + '&cursor=' + cursor, 
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
  customURL: (Url) => https + Url, 
  RobloxDomain: robloxDomain 
};