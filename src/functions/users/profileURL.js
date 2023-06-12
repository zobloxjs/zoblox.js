const Routes = require('../../util/Routes.js');

module.exports = function() {
  return Routes.users.profile(this.id);
}