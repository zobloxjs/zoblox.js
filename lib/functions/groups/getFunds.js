const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const { data: funds } = await this.zoblox.session.get(Routes.economy.currency(this.id));
    return funds;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}