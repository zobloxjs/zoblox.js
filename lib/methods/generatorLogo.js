const axios = require('axios');
const Routes = require('../util/Routes.js');

module.exports = async function getGroupLogo(groupId) {  
  const { data: groupLogo } = await axios.get(Routes.thumbnails.groups(`?groupIds=${groupId}&size=420x420&format=png&isCircular=false`));
  const logo = groupLogo.data[0].imageUrl.split(Routes.RbxThumbnailURL)[1].split('/420/420/Image/Png')[0];
  return logo;
};