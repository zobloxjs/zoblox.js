const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    if (Object.keys(this.session).length === 0) throw new Error('You are not logged in');

    const response = await this.session.get(Routes.me);
    if (response.headers['content-type'].includes('text/html')) throw new Error('Invalid cookie was provided');
  
    return response.data;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.statusText}.`);
    if (!e.response) throw new Error(e.message);
  } 
};