const Routes = require('../../util/Routes.js');

module.exports = async function(data) {
  const defaults = {
    type: 'AvatarBust',
    format: 'png',
    isCircular: false,
  };

  data.forEach((thumbnail) => {
    Object.entries(defaults).forEach(([key, value]) => {
      if (!thumbnail.hasOwnProperty('targetId')) throw new Error('This request needs targetId property');
      if (!thumbnail.hasOwnProperty('size')) throw new Error('This request needs size property');
      if (!thumbnail.hasOwnProperty(key)) {
        thumbnail[key] = value;
      }
    });
  });

  try {
    const { data: { data: Thumbnails } } = await this.session.post(Routes.thumbnails.batch, {
      data
    });
    return Thumbnails;
    
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  } 
}