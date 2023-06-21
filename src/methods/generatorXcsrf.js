const axios = require('axios');
const Routes = require('../util/Routes.js');

module.exports = async function(Cookie) {
  let XCSRF;
  const response = await axios({ url: Routes.logout, method: 'POST', headers: { 'Cookie': '.ROBLOSECURITY=' + Cookie, 'Content-Type': 'application/json' }}).catch(({ response: res }) => {
  XCSRF = res.headers['x-csrf-token'];
  if (!XCSRF) throw new Error('Invalid cookie was provided');
  });
  return XCSRF;
};