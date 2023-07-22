const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    if (!this.rest.headers['Cookie'] || !this.rest.headers['X-CSRF-TOKEN']) throw new Error('You are not logged in');

    const response = await this.rest.get(Routes.me);
    if (response.headers['content-type'].includes('text/html')) throw new Error('Invalid cookie was provided');
  
    return response.data;
  } catch (e) {
    const err = e.response ? `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  } 
};