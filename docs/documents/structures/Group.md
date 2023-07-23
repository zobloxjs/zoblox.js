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

- ### editSettings(options)
Modify group settings.

```js
//Register first with cookie < zoblox.login(Cookie)

group.editSettings(options);
```

[Show Source]()

---

- ### fetchAssets(options)
Fetch some of the group's assets.

### Options:

| Name      | Default | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| assetType |         | The type of asset.                                |
| limit     | 100     | The max number of assets to return.               |
| sortOrder | Asc     | Array order descending 'Desc' or Ascending 'Asc'. |
| cursor    | ''      | The cursor for the next page.                     |

```js
//Register first with cookie < zoblox.login(Cookie)

const { AssetTypes } = require("zoblox.js");
const assets = await group.fetchAssets({ assetType: AssetTypes.Shirt });

console.log(asset);
```

[Show Source]()

---

- ### fetchAuditLog(options)
Fetch some of the group's audit log.

### Options:

| Name      | Default | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| userId    | ''      | User ID To filter it.                             |
| limit     | 100     | The max number of logs to return.                 |
| sortOrder | Asc     | Array order descending 'Desc' or Ascending 'Asc'. |
| cursor    | ''      | The cursor for the next page.                     |

```js
//Register first with cookie < zoblox.login(Cookie)

const logs = await group.fetchAuditLog({ actionType: "SpendGroupFunds" });
console.log(logs);
```

[Show Source]()

---

- ### fetchCurrency()
Fetch the current number of funds in the group.

```js
const funds = await group.fetchCurrency();
console.log(funds);
```

[Show Source]()

---

- ### fetchGames(options)
Fetch some of the group's games.

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
Fetch your membership in the group.

```js
//Register first with cookie < zoblox.login(Cookie)

const me = await group.fetchMemberShip();
console.log(me);
```

[Show Source]()

---

- ### fetchNameHistory(options)
Fetch some of the group's name history.

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
Fetch the group owner.

```js
const owner = await group.fetchOwner();
console.log(owner);
```

[Show Source]()

---

- ### fetchPayoutPercentages()
Fetch users percentages in payouts.

```js
const users = await group.fetchPayoutPercentages();
console.log(users);
```

[Show Source]()

---

- ### fetchPayoutsRevenue()
Fetch the payouts revenue.

```js
const payoutsRevenue = await group.fetchPayoutsRevenue();
console.log(payoutsRevenue);
```

[Show Source]()

---

- ### fetchRevenueSummary(options)
Fetch the group revenue summary.

| Name      | Default | Description                                                                |
| --------- | ------- | -------------------------------------------------------------------------- |
| timeFrame | month   | Allows selecting different time intervals: 'day', 'week', 'month', 'year.' |

```js
const revenueSummary = await group.fetchRevenueSummary();
console.log(revenueSummary);
```

[Show Source]()

---

- ### fetchSettings(options)
Fetch group settings.

[Show Source]()

---

- ### fetchSocialLinks()
Fetch group socialLinks.

[Show Source]()

---

- ### fetchTransactions(uptime)
Fetch group transactions.

[Show Source]()

---

- ### fetchWallPosts(options)
Fetch some of the group's wall posts.

[Show Source]()

---

- ### leave()
Leave a group.

[Show Source]()

---

- ### payouts(options)
Transfer robux to someone from the group's funds

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
