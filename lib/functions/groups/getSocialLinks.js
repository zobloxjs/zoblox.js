const Routes = require('../../util/Routes.js');

module.exports = async function() {
  try {
    const { data: SocialLinks } = await this.zoblox.session.get(Routes.groups.SocialLinks(this.id));
    return SocialLinks;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  } 
}