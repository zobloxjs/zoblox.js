<div align="center">
	<br/>
	<p>
		<img src="https://cdn.glitch.global/2112c3ad-11f6-4231-ba2b-1ffc12182f51/IMG_20230607_175516.png?v=1686245339559" width="546" alt="zoblox.js" />
	</p>
	<br/>
	<p>
		<a href="https://discord.gg/5TMUMypcxj"><img src="https://img.shields.io/discord/1112831968443388037?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/zoblox.js"><img src="https://img.shields.io/npm/v/zoblox.js.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/zoblox.js"><img src="https://img.shields.io/npm/dt/zoblox.js.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

## About 

```zoblox.js``` is a convenient npm library that simplifies the usage of the Roblox API, making it easier for developers to interact with Roblox in their Node.js projects.

## Features

- Simplified and streamlined integration of the Roblox API
- Easy authentication and login process
- Access to various Roblox API endpoints and functionalities

## Installation

To use zoblox.js in your Node.js project, you can install it via npm:

```sh
npm init
npm install zoblox.js
```

## Import Files

Here's an example of import zoblox.js in your project:

```js
const { Zoblox } = require('zoblox.js');
// If you are using ES6 modules, follow the following code:
import { Zoblox } from 'zoblox.js';
```

## Usage

Here's an example of how to log in and retrieve the username and ID using zoblox.js: 

```js
const zoblox = new Zoblox();

zoblox.on('userReady', () => console.log(`Logged in as: ${zoblox.me.username} (${zoblox.me.id})`));

(async () => {
  await zoblox.login(COOKIE); // Replace COOKIE with your RobloxSecurity
})();
```

## Links

- [Documentation][documentation]
- [zoblox.js Discord server][discord]
- [GitHub][source]
- [npm][npm]

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the [GitHub Repository][source].

## Help 

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [zoblox.js Server][discord].

## Developers

- [Slayver](https://github.com/SlayverB)

[documentation]: https://github.com/zobloxjs/zoblox.js/blob/glitch/docs/index.md
[discord]: https://discord.gg/5TMUMypcxj
[source]: https://github.com/zobloxjs/zoblox.js
[npm]: https://npmjs.org/package/zoblox.js