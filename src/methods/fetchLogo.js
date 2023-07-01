const axios = require('axios');
const Routes = require('../util/Routes.js');

module.exports = async function(groupId) {  
  let { data: logo } = await axios.get(Routes.thumbnails.groups(`?groupIds=${groupId}&size=420x420&format=png&isCircular=false`));
  
  logo = logo.data[0]?.imageUrl;
  logo = logo?.split('/');
  
  return logo ? logo[3] : null;
};