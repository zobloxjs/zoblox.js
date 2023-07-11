const Routes = require('../../util/Routes.js');

module.exports = function({ sizes, format, isCircular } = {}) {
  sizes = sizes || '420x420', format = format || 'png', isCircular = isCircular || false;
  sizes = sizes.split('x');
  format = format.charAt(0).toUpperCase() + format.slice(1).toLowerCase();
    
  if (sizes.length !== 2 || !sizes.every(isFinite)) throw new Error('sizes: you inputed a invalid size format');

  const data = {
    x: +sizes[0],
    y: +sizes[1]
  }
    
  const imageUrl = Routes.RbxThumbnailURL + this.logo + `/${data.x}/${data.y}/Image/${format}${isCircular ? '/isCircular' : '' }`;
  return imageUrl; 
}