# Functions

- ### deleteWallPost(postId)

```js
//Register first with cookie < zoblox.login(Cookie)

group.deleteWallPost(1);
```

[Show Source]()

---

- ### deleteWallPostsByUser(userId);

```js
//Register first with cookie < zoblox.login(Cookie)

group.deleteWallPostsByUser(1);
```

[Show Source]()

---

- ### editSettings(options)

```js
//Register first with cookie < zoblox.login(Cookie)

group.editSettings(options);
```

[Show Source]()

---

- ### fetchAssets(options)

### Options:

| Name      | Default | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| assetType |         | The type of asset.                               |
| limit     | 100     | The max number of assets to return.              |
| sortOrder | Asc     | Array order descending 'Desc' or Ascending 'Asc' |
| cursor    | ''      | The cursor for the next page.                    |

```js
const { AssetTypes } = require("zoblox.js");
const assets = await group.fetchAssets({ assetType: AssetTypes.Shirt });

console.log(asset);
```

[Show Source]()

- ### fetchAuditLog(options)

### Options:

| Name      | Default | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| userId    | ''      | User ID To filter it.                            |
| limit     | 100     | The max number of assets to return.              |
| sortOrder | Asc     | Array order descending 'Desc' or Ascending 'Asc' |
| cursor    | ''      | The cursor for the next page.                    |

| actionType:                 |                         |
| --------------------------- | ----------------------- | ------------------------------- |
| DeletePost                  | Delete a post.          |
| RemoveMember                | Remove a member.        |
| AcceptJoinRequest           | Accept a join request.  |
| DeclineJoinRequest          | Decline a join request. |
| PostStatus                  |                         | Post a status.                  |
| ChangeRank                  |                         | Change rank.                    |
| BuyAd                       |                         | Buy an ad.                      |
| SendAllyRequest             |                         | Send an ally request.           |
| CreateEnemy                 |                         | Create an enemy.                |
| AcceptAllyRequest           |                         | Accept an ally request.         |
| DeclineAllyRequest          |                         | Decline an ally request.        |
| DeleteAlly                  |                         | Delete an ally.                 |
| DeleteEnemy                 |                         | Delete an enemy.                |
| AddGroupPlace               |                         | Add a group place.              |
| RemoveGroupPlace            |                         | Remove a group place.           |
| CreateItems                 |                         | Create items.                   |
| ConfigureItems              |                         | Configure items.                |
| SpendGroupFunds             |                         | Spend group funds.              |
| ChangeOwner                 |                         | Change owner.                   |
| Delete                      |                         | Delete.                         |
| AdjustCurrencyAmounts       |                         | Adjust currency amounts.        |
| Abandon                     |                         | Abandon.                        |
| Claim                       |                         | Claim.                          |
| Rename                      |                         | Rename.                         |
| ChangeDescription           |                         | Change description.             |
| InviteToClan                |                         | Invite to clan.                 |
| KickFromClan                |                         | Kick from clan.                 |
| CancelClanInvite            |                         | Cancel clan invite.             |
| BuyClan                     |                         | Buy clan.                       |
| CreateGroupAsset            |                         | Create group asset.             |
| UpdateGroupAsset            |                         | Update group asset.             |
| ConfigureGroupAsset         |                         | Configure group asset.          |
| RevertGroupAsset            |                         | Revert group asset.             |
| CreateGroupDeveloperProduct |                         | Create group developer product. |
| ConfigureGroupGame          |                         | Configure group game.           |
| Lock                        |                         | Lock.                           |
| Unlock                      |                         | Unlock.                         |
| CreateGamePass              |                         | Create game pass.               |
| CreateBadge                 |                         | Create badge.                   |
| ConfigureBadge              |                         | Configure badge.                |
| SavePlace                   |                         | Save place.                     |
| PublishPlace                |                         | Publish place.                  |

```js
const logs = await group.fetchAuditLog({ actionType: "SpendGroupFunds" });
console.log(logs);
```
