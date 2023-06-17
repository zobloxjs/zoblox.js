const Routes = require('../../util/Routes.js');

module.exports = async function(requests) {
  if (requests.length > 100) throw new Error('Too many thumbnailRequests, maximum 100');

  const defaults = {
    type: 'AvatarBust',
    format: 'png',
    isCircular: true,
  };

  requests.forEach((item) => {
    Object.entries(defaults).forEach(([key, value]) => {
      if (!item.hasOwnProperty('targetId')) throw new Error('This request needs targetId property');
      if (!item.hasOwnProperty('size')) throw new Error('This request needs size property');
      if (!item.hasOwnProperty(key)) {
        item[key] = value;
      }
    });
  });

  const { data: { data: response } } = await this.session.post(Routes.thumbnails.batch, {
    body: requests
  })
  return response;
}