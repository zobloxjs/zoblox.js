# Functions

- ### buy() 
Buy an asset from the marketplace.

```js
//Register first with cookie < zoblox.login(Cookie)

asset.buy()
```
[Show Source]()

- ### deleteFromInventory()
Remove asset from the authenticated user.
```js
//Register first with cookie < zoblox.login(Cookie)

asset.deleteFromInventory()
```
[Show Source]()

- ### fetchResaleData() 
Get the recent sale history (price and volume per day for 180 days) of a limited asset.
```js
const resaleData = await asset.fetchResaleData();
console.log(resaleData);
```
[Show Source]()

- ### fetchResellers(options)
Gets available resale copies of a limited asset.

### Options: 
|Name|Default|Description
|-|-|-
|limit|100|The max number of resellers to return.

```js
//Register first with cookie < zoblox.login(Cookie)

const resellers = await asset.fetchResellers(options);
console.log(resellers);
```
[Show Source]()
