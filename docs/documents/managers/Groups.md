## Welcome to the zobloxjs documentation for Groups! This comprehensive guide is your go-to resource for mastering group management with zobloxjs. Explore detailed explanations, best practices, and step-by-step instructions to effortlessly handle group operations. Whether you're running a gaming community, social platform, or any collaborative environment, zobloxjs empowers you to efficiently manage groups and enhance the user experience. Let's dive in and make group management a breeze with zobloxjs!

---

## create(groupName, options)

Create a group.

### Options:

| Name                    | Default | Description                                |
| ----------------------- | ------- | ------------------------------------------ |
| icon                    |         | The icon of the group.                     |
| publicGroup             | false   | Whether members can join without a request |
| buildersClubMembersOnly | true    | Exclusive Builders Club Membership.        |

```js
zoblox.groups.create('Robot-aav1', {
  icon: 'imageUrl Or image Or buffer',
});
```

[Show Source]()

---

## search(options)

Searches for groups by a given search term.

### Options:

| Name                 | Default | Description                                                  |
| -------------------- | ------- | ------------------------------------------------------------ |
| prioritizeExactMatch | false   | Whether or not to prioritize the exact match for the keyword |
| firstGroup           | false   | Specifying if you want him to return the first group         |
| keyword              |         | The keyword or search term to search by.                     |
| limit                | ''      | The maximum number of groups to return.                      |
| cursor               | ''      | The cursor for the next page.                                |

```js
const group = await zoblox.groups.search({ keyword: 'Robot-aav1' });
console.log(group);
```

[Show Source]()

---

## searchByName(groupName, prioritizeExactMatch)

Searches for groups by name.

```js
const group = await zoblox.groups.searchByName('Robot-aav1');
console.log(group);
```

[Show Source]()

---

## fetch(groupIds)

Get a groups info.

```js
const groups = await zoblox.groups.fetch([1, 2]);
console.log(groups);
```

[Show Source]()

---

## get(groupId)

Get a group info.

```js
const group = await zoblox.groups.get(1);
console.log(group);

//return Group
```

[Show Source]()

___

[Group](https://github.com/zobloxjs/zoblox.js/blob/glitch/docs/documents/structures/Group.md)
