const axios = require('axios');
const Routes = require('../util/Routes.js');

module.exports = async function(userId) {
  let { data: avatar } = await axios.get(Routes.thumbnails.users.body(`?userIds=${userId}&size=420x420&format=png&isCircular=false`));
  let { data: headshot } = await axios.get(Routes.thumbnails.users.headshot(`?userIds=${userId}&size=420x420&format=png&isCircular=false`));

  avatar = avatar.data[0]?.imageUrl;
  avatar = avatar?.split('/');
  
  headshot = headshot.data[0]?.imageUrl;
  headshot = headshot?.split('/');

  return {
    body: avatar ? avatar[3] : null,
    headshot: headshot ? headshot[3] : null
  };
};