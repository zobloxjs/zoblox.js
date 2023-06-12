const Routes = require('../../util/Routes.js');

module.exports = function() {
  return Routes.groups.link(this.id);
}