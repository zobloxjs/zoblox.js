# Functions

- ### deleteWallPost(postId)
Removes specific wall post.

```js
//Register first with cookie < zoblox.login(Cookie)

group.deleteWallPost(1);
```

[Show Source]()

---

- ### deleteWallPostsByUser(userId);
Removes all wall posts from a specific user.

```js
//Register first with cookie < zoblox.login(Cookie)

group.deleteWallPostsByUser(1);
```

[Show Source]()

---

- ### editSettings(data)
Modify group settings.

```js
//Register first with cookie < zoblox.login(Cookie)

group.editSettings({ 
  isApprovalRequired: true, 
  areEnemiesAllowed: true, 
  areGroupFundsVisible: true,  
  areGroupGamesVisible: true
});
```

[Show Source]()

---

- ### fetchAssets(options)
Gets some of the group's assets.

### Options:

| Name      | Default | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| assetType |         | The type of asset.                                |
| limit     | 100     | The max number of assets to return.               |
| sortOrder | Asc     | Array order descending 'Desc' or Ascending 'Asc'. |
| cursor    | ''      | The cursor for the next page.                     |

```js
//Register first with cookie < zoblox.login(Cookie)

const { AssetTypes } = require('zoblox.js');
const assets = await group.fetchAssets({ assetType: AssetTypes.Shirt });

console.log(asset);
```

[Show Source]()

---

- ### fetchAuditLog(options)
Gets some of the group's audit log.

### Options:

| Name              | Default | Description                              |
|-------------------|---------|------------------------------------------|
| userId            | ''      | User ID To filter it.                   |
| actionType        |         | The type of action.               |
| limit             | 100     | The max number of assets to return.     |
| sortOrder         | Asc     | Array order descending 'Desc' or Ascending 'Asc' |
| cursor            | ''      | The cursor for the next page.           |

### Actions:

|  Name             | Description                             |
|-------------------|-----------------------------------------|
| DeletePost      | Delete a post.                          |
| RemoveMember    | Remove a member.                        |
| AcceptJoinRequest | Accept a join request.                 |
| DeclineJoinRequest | Decline a join request.               |
| PostStatus      | Post a status.                          |
| ChangeRank      | Change rank.                            |
| BuyAd           | Buy an ad.                              |
| SendAllyRequest | Send an ally request.                   |
| CreateEnemy     | Create an enemy.                        |
| AcceptAllyRequest | Accept an ally request.                |
| DeclineAllyRequest | Decline an ally request.              |
| DeleteAlly      | Delete an ally.                         |
| DeleteEnemy     | Delete an enemy.                        |
| AddGroupPlace   | Add a group place.                      |
| RemoveGroupPlace | Remove a group place.                   |
| CreateItems     | Create items.                           |
| ConfigureItems  | Configure items.                        |
| SpendGroupFunds | Spend group funds.                      |
| ChangeOwner     | Change owner.                           |
| Delete          | Delete.                                 |
| AdjustCurrencyAmounts | Adjust currency amounts.           |
| Abandon         | Abandon.                                |
| Claim           | Claim.                                  |
| Rename          | Rename.                                 |
| ChangeDescription | Change description.                 |
| InviteToClan    | Invite to clan.                         |
| KickFromClan    | Kick from clan.                         |
| CancelClanInvite | Cancel clan invite.                   |
| BuyClan         | Buy clan.                               |
| CreateGroupAsset | Create group asset.                   |
| UpdateGroupAsset | Update group asset.                   |
| ConfigureGroupAsset | Configure group asset.             |
| RevertGroupAsset | Revert group asset.                   |
| CreateGroupDeveloperProduct | Create group developer product. |
| ConfigureGroupGame | Configure group game.             |
| Lock            | Lock.                                   |
| Unlock          | Unlock.                                 |
| CreateGamePass  | Create game pass.                      |
| CreateBadge     | Create badge.                          |
| ConfigureBadge  | Configure badge.                       |
| SavePlace       | Save place.                             |
| PublishPlace    | Publish place.                          |
                           
```js
//Register first with cookie < zoblox.login(Cookie)

const logs = await group.fetchAuditLog({ actionType: "SpendGroupFunds" });
console.log(logs);
```

[Show Source]()

---

- ### fetchCurrency()
Gets the current number of funds in the group.

```js
const funds = await group.fetchCurrency();
console.log(funds);
```

[Show Source]()

---

- ### fetchGames(options)
Gets some of the group's games.

### Options:

| Name         | Default | Description                                                                                                      |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------------- |
| accessFilter | All     | determines the access level: 'All' for all results, 'Public' for public access, 'Private' for restricted access. |
| limit        | 100     | The max number of games to return.                                                                               |
| sortOrder    | Asc     | Array order descending 'Desc' or Ascending 'Asc'.                                                                |
| cursor       | ''      | The cursor for the next page.                                                                                    |

```js
const games = await group.fetchGames();
console.log(games);
```

[Show Source]()

---

- ### fetchMemberShip()
Get your membership in the group.

```js
//Register first with cookie < zoblox.login(Cookie)

const me = await group.fetchMemberShip();
console.log(me);
```

[Show Source]()

---

- ### fetchNameHistory(options)
Gets some of the group's name history.

### Options:

| Name      | Default | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| limit     | 100     | The max number of names to return.                |
| sortOrder | Asc     | Array order descending 'Desc' or Ascending 'Asc'. |
| cursor    | ''      | The cursor for the next page.                     |

```js
const names = await group.fetchNameHistory();
console.log(names);
```

[Show Source]()

---

- ### fetchOwner()
Get the group owner.

```js
const owner = await group.fetchOwner();
console.log(owner);
```

[Show Source]()

---

- ### fetchPayoutPercentages()
Gets users percentages in payouts.

```js
const users = await group.fetchPayoutPercentages();
console.log(users);
```

[Show Source]()

---

- ### fetchPayoutsRevenue()
Get the payouts revenue.

```js
const payoutsRevenue = await group.fetchPayoutsRevenue();
console.log(payoutsRevenue);
```

[Show Source]()

---

- ### fetchRevenueSummary(options)
Get the group revenue summary.

| Name      | Default | Description                                                                |
| --------- | ------- | -------------------------------------------------------------------------- |
| timeFrame | month   | Allows selecting different time intervals: 'day', 'week', 'month', 'year.' |

```js
const revenueSummary = await group.fetchRevenueSummary();
console.log(revenueSummary);
```

[Show Source]()

---

- ### fetchSettings()
Gets group settings.

[Show Source]()

---

- ### fetchSocialLinks()
Gets group social links.

[Show Source]()

---

- ### fetchTransactions(options)
Gets group transactions.

[Show Source]()

---

- ### fetchWallPosts(options)
Gets some of the group's wall posts.

[Show Source]()

---

- ### leave()
Leave a group.

[Show Source]()

---

- ### payouts(recipients, recurring = false, usePercentage = false)
Transferring robux to people from the group's funds.

```js
await group.payouts([{ 
  recipientId: 1, //User Id 
  recipientType: 'User', 
  amount: 10 
}]);
```

[Show Source]()

---

- ### postShout(shout)
Post a shout.

[Show Source]()

---

- ### setDescription(newDescription)
Sets the group description.

[Show Source]()

---

- ### setIcon(newIcon)
Sets the group icon.

[Show Source]()

---

- ### setName(newName)
Sets the group name.

[Show Source]()

---

- ### setOwner(newOwnerId);
Sets the group owner.

[Show Source]()
