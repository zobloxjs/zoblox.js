const Zoblox = require('../zoblox.js');
const MeUser = require('../structures/MeUser.js');
const User = require('../structures/User.js');
const Group = require('../structures/Group.js');
const GroupMember = require('../structures/GroupMember.js');
const GroupRequest = require('../structures/GroupRequest.js');
const GamePass = require('../structures/GamePass.js');
const Asset = require('../structures/Asset.js');

//MeUser
MeUser.prototype.declineAllFriendRequests = require('../functions/me/declineAllFriendRequests.js');
MeUser.prototype.getFriendRequests = require('../functions/me/getFriendRequests.js');
MeUser.prototype.getTransactions = require('../functions/me/getTransactions.js');
MeUser.prototype.logout = require('../functions/me/logout.js');
MeUser.prototype.removeAsset = require('../functions/me/removeAsset.js');
MeUser.prototype.wearAsset = require('../functions/me/wearAsset.js');

//Zoblox 
Zoblox.prototype.getCurrentUser = require('../functions/zoblox/getCurrentUser.js');
Zoblox.prototype.getSession = require('../functions/zoblox/getSession.js');
Zoblox.prototype.getThumbnails = require('../functions/zoblox/getThumbnails.js');
Zoblox.prototype.getXcsrf = require('../functions/zoblox/getXcsrf.js');

//User 
User.prototype.acceptFriendRequest = require('../functions/users/acceptFriendRequest.js');
User.prototype.avatarURL = require('../functions/users/avatarURL.js');
User.prototype.block = require('../functions/users/block.js');
User.prototype.declineFriendRequest = require('../functions/users/declineFriendRequest.js');
User.prototype.getBadges = require('../functions/users/getBadges.js');
User.prototype.getFriends = require('../functions/users/getFriends.js');
User.prototype.getInventory = require('../functions/users/getInventory.js');
User.prototype.getSocialLinks = require('../functions/users/getSocialLinks.js');
User.prototype.hasGroup = require('../functions/users/hasGroup.js');
User.prototype.profileURL = require('../functions/users/profileURL.js');
User.prototype.removeFriend = require('../functions/users/removeFriend.js');
User.prototype.sendFriendRequest = require('../functions/users/sendFriendRequest.js');
User.prototype.unblock = require('../functions/users/unblock.js');
User.prototype.unfollow = require('../functions/users/unfollow.js');

//Group
Group.prototype.changeDescription = require('../functions/groups/changeDescription.js');
Group.prototype.changeName = require('../functions/groups/changeName.js');
Group.prototype.changeOwner = require('../functions/groups/changeOwner.js');
Group.prototype.changeShout = require('../functions/groups/changeShout.js');
Group.prototype.deleteWallPost = require('../functions/groups/deleteWallPost.js');
Group.prototype.deleteWallPostsByUser = require('../functions/groups/deleteWallPostsByUser.js');
Group.prototype.getAssets = require('../functions/groups/getAssets.js');
Group.prototype.getAuditLog = require('../functions/groups/getAuditLog.js');
Group.prototype.getFunds = require('../functions/groups/getFunds.js');
Group.prototype.getGames = require('../functions/groups/getGames.js');
Group.prototype.getRevenueSummary = require('../functions/groups/getRevenueSummary.js');
Group.prototype.getSocialLinks = require('../functions/groups/getSocialLinks.js');
Group.prototype.getTransactions = require('../functions/groups/getTransactions.js');
Group.prototype.getWallPosts = require('../functions/groups/getWallPosts.js');
Group.prototype.leave = require('../functions/groups/leave.js');
Group.prototype.linkURL = require('../functions/groups/linkURL.js');
Group.prototype.logoURL = require('../functions/groups/logoURL.js');
Group.prototype.payouts = require('../functions/groups/payouts.js');

//GroupMember
GroupMember.prototype.changeRole = require('../functions/groups/members/changeRole.js');
GroupMember.prototype.getRank = require('../functions/groups/members/getRank.js');
GroupMember.prototype.getRankName = require('../functions/groups/members/getRankName.js');
GroupMember.prototype.hasRole = require('../functions/groups/members/hasRole.js');
GroupMember.prototype.isOwner = require('../functions/groups/members/isOwner.js');
GroupMember.prototype.kick = require('../functions/groups/members/kick.js');
GroupMember.prototype.payout = require('../functions/groups/members/payout.js');

//GroupRequest 
GroupRequest.prototype.accept = require('../functions/groups/requests/accept.js');
GroupRequest.prototype.decline = require('../functions/groups/requests/decline.js');

//GamePass
GamePass.prototype.edit = require('../functions/games/pass/edit.js');

//Asset
Asset.prototype.buy = require('../functions/assets/buy.js');
Asset.prototype.deleteFromInventory = require('../functions/assets/deleteFromInventory.js');
Asset.prototype.getResaleData = require('../functions/assets/getResaleData.js');
Asset.prototype.getResellers = require('../functions/assets/getResellers.js');