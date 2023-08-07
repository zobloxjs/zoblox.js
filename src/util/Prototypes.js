const Zoblox = require('../zoblox.js');
const MeUser = require('../structures/MeUser.js');
const User = require('../structures/User.js');
const Group = require('../structures/Group.js');
const GroupMember = require('../structures/GroupMember.js');
const GroupRequest = require('../structures/GroupRequest.js');
const GroupRole = require('../structures/GroupRole.js');
const GamePass = require('../structures/GamePass.js');
const Universe = require('../structures/Universe.js');
const Asset = require('../structures/Asset.js');

//MeUser
MeUser.prototype.declineAllFriendRequests = require('../functions/me/declineAllFriendRequests.js');
MeUser.prototype.fetchBirthdate = require('../functions/me/fetchBirthdate.js');
MeUser.prototype.fetchBlockedUsers = require('../functions/me/fetchBlockedUsers.js');
MeUser.prototype.fetchDescription  = require('../functions/me/fetchDescription.js');
MeUser.prototype.fetchFriendRequests = require('../functions/me/fetchFriendRequests.js');
MeUser.prototype.fetchGender = require('../functions/me/fetchGender.js');
MeUser.prototype.fetchSocialLinks = require('../functions/me/fetchSocialLinks.js');
MeUser.prototype.fetchTransactions = require('../functions/me/fetchTransactions.js');
MeUser.prototype.logout = require('../functions/me/logout.js');
MeUser.prototype.removeClothes = require('../functions/me/removeClothes.js');
MeUser.prototype.setDescription = require('../functions/me/setDescription.js');
MeUser.prototype.setGender = require('../functions/me/setGender.js');
MeUser.prototype.setSocialLinks = require('../functions/me/setSocialLinks.js');
MeUser.prototype.wearClothes = require('../functions/me/wearClothes.js');

//Zoblox 
Zoblox.prototype.fetchCurrentUser = require('../functions/zoblox/fetchCurrentUser.js');
Zoblox.prototype.fetchThumbnails = require('../functions/zoblox/fetchThumbnails.js');
Zoblox.prototype.getXcsrf = require('../functions/zoblox/getXcsrf.js');

//User 
User.prototype.acceptFriendRequest = require('../functions/users/acceptFriendRequest.js');
User.prototype.avatarURL = require('../functions/users/avatarURL.js');
User.prototype.block = require('../functions/users/block.js');
User.prototype.declineFriendRequest = require('../functions/users/declineFriendRequest.js');
User.prototype.fetchBadges = require('../functions/users/fetchBadges.js');
User.prototype.fetchCreationGames = require('../functions/users/fetchCreationGames.js');
User.prototype.fetchFavoriteGames = require('../functions/users/fetchFavoriteGames.js');
User.prototype.fetchFriends = require('../functions/users/fetchFriends.js');
User.prototype.fetchGroups = require('../functions/users/fetchGroups.js');
User.prototype.fetchInventory = require('../functions/users/fetchInventory.js');
User.prototype.fetchPresence = require('../functions/users/fetchPresence.js');
User.prototype.fetchSocialLinks = require('../functions/users/fetchSocialLinks.js');
User.prototype.removeFriend = require('../functions/users/removeFriend.js');
User.prototype.sendFriendRequest = require('../functions/users/sendFriendRequest.js');
User.prototype.unblock = require('../functions/users/unblock.js');
User.prototype.unfollow = require('../functions/users/unfollow.js');

//Group
Group.prototype.deleteWallPost = require('../functions/groups/deleteWallPost.js');
Group.prototype.deleteWallPostsByUser = require('../functions/groups/deleteWallPostsByUser.js');
Group.prototype.editSettings = require('../functions/groups/editSettings.js');
Group.prototype.fetchAssets = require('../functions/groups/fetchAssets.js');
Group.prototype.fetchAuditLog = require('../functions/groups/fetchAuditLog.js');
Group.prototype.fetchCurrency = require('../functions/groups/fetchCurrency.js');
Group.prototype.fetchGames = require('../functions/groups/fetchGames.js');
Group.prototype.fetchMemberShip = require('../functions/groups/fetchMemberShip.js');
Group.prototype.fetchNameHistory = require('../functions/groups/fetchNameHistory.js');
Group.prototype.fetchOwner = require('../functions/groups/fetchOwner.js');
Group.prototype.fetchPayoutPercentages = require('../functions/groups/fetchPayoutPercentages.js');
Group.prototype.fetchPayoutsRevenue = require('../functions/groups/fetchPayoutsRevenue.js');
Group.prototype.fetchRevenueSummary = require('../functions/groups/fetchRevenueSummary.js');
Group.prototype.fetchSettings = require('../functions/groups/fetchSettings.js');
Group.prototype.fetchSocialLinks = require('../functions/groups/fetchSocialLinks.js');
Group.prototype.fetchTransactions = require('../functions/groups/fetchTransactions.js');
Group.prototype.fetchWallPosts = require('../functions/groups/fetchWallPosts.js');
Group.prototype.leave = require('../functions/groups/leave.js');
Group.prototype.logoURL = require('../functions/groups/logoURL.js');
Group.prototype.payouts = require('../functions/groups/payouts.js');
Group.prototype.postShout = require('../functions/groups/postShout.js');
Group.prototype.setDescription = require('../functions/groups/setDescription.js');
Group.prototype.setIcon = require('../functions/groups/setIcon.js');
Group.prototype.setName = require('../functions/groups/setName.js');
Group.prototype.setOwner = require('../functions/groups/setOwner.js');

//GroupMember
GroupMember.prototype.fetchPayoutEligibility = require('../functions/groups/members/fetchPayoutEligibility.js');
GroupMember.prototype.fetchRole = require('../functions/groups/members/fetchRole.js');
GroupMember.prototype.hasRole = require('../functions/groups/members/hasRole.js');
GroupMember.prototype.kick = require('../functions/groups/members/kick.js');
GroupMember.prototype.payout = require('../functions/groups/members/payout.js');
GroupMember.prototype.setRole = require('../functions/groups/members/setRole.js');

//GroupRequest 
GroupRequest.prototype.accept = require('../functions/groups/requests/accept.js');
GroupRequest.prototype.decline = require('../functions/groups/requests/decline.js');

//GroupRole
GroupRole.prototype.delete = require('../functions/groups/roles/delete.js');
GroupRole.prototype.edit = require('../functions/groups/roles/edit.js');
GroupRole.prototype.editPermissions = require('../functions/groups/roles/editPermissions.js');

//GamePass
GamePass.prototype.edit = require('../functions/games/pass/edit.js');

//Universe
Universe.prototype.fetchBadges = require('../functions/games/universe/fetchBadges.js');
Universe.prototype.fetchPasses = require('../functions/games/universe/fetchPasses.js');
Universe.prototype.fetchRevenue = require('../functions/games/universe/fetchRevenue.js');
Universe.prototype.fetchSocialLinks = require('../functions/games/universe/fetchSocialLinks.js');

//Asset
Asset.prototype.buy = require('../functions/assets/buy.js');
Asset.prototype.deleteFromInventory = require('../functions/assets/deleteFromInventory.js');
Asset.prototype.fetchResaleData = require('../functions/assets/fetchResaleData.js');
Asset.prototype.fetchResellers = require('../functions/assets/fetchResellers.js');