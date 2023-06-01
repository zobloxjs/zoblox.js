const axios = require('axios');
const Routes = require('../util/Routes.js');

module.exports = async function getPlayerThumbnail(userId) {
  const { data: avatar } = await axios.get(Routes.thumbnails.users.body(`?userIds=${userId}&size=420x420&format=png&isCircular=false`));
  const { data: headshot } = await axios.get(Routes.thumbnails.users.headshot(`?userIds=${userId}&size=420x420&format=png&isCircular=false`));
  return {
    body: avatar.data[0].imageUrl.split(Routes.RbxThumbnailURL)[1].split('/420/420/Avatar/Png')[0],
    headshot: headshot.data[0].imageUrl.split(Routes.RbxThumbnailURL)[1].split('/420/420/AvatarHeadshot/Png')[0]
  };
};