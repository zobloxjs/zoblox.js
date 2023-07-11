const Routes = require('../../util/Routes.js');

module.exports = function({ sizes, format, type, isCircular } = {}) {
  sizes = sizes || '420x420', format = format || 'png', type = type || 'body', isCircular = isCircular || false; 
  sizes = sizes.split('x');
  format = format.charAt(0).toUpperCase() + format.slice(1).toLowerCase();
    
  if (sizes.length !== 2 || !sizes.every(isFinite)) throw new Error('sizes: you inputed a invalid size format');

  const data = {
    x: +sizes[0],
    y: +sizes[1]
  }
    
  switch (type.toLowerCase()) {
    case 'headshot':
      const imageUrlHeadshot = Routes.RbxThumbnailURL + this.avatar.headshot + `/${data.x}/${data.y}/AvatarHeadshot/${format}${isCircular ? '/isCircular' : '' }`;
      return imageUrlHeadshot; 
      break;
    case 'body':
      const imageUrlBody = Routes.RbxThumbnailURL + this.avatar.body + `/${data.x}/${data.y}/Avatar/${format}${isCircular ? '/isCircular' : '' }`;
      return imageUrlBody;
      break;
    default:
    throw new TypeError('Unsupported image type');
  }
}