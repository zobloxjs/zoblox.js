const { Zoblox } = require('../src/index.js');
const zoblox = new Zoblox();

(async () => {
  await zoblox.login(process.env.TEST_COOKIE);
  const user = await zoblox.users.get(1);
  console.log(user);
})();