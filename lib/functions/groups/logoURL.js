module.exports = function({ sizes = '420x420', format = 'png' } = { sizes: '420x420', format: 'png' }) {
  sizes = sizes.split('x');
  format = format.charAt(0).toUpperCase() + format.slice(1).toLowerCase();
    
  if (sizes.length !== 2 || !sizes.every(isFinite)) throw new Error('sizes: you inputed a invalid size format');

  const data = {
    x: +sizes[0],
    y: +sizes[1]
  }
    
  const ImageUrl = this.zoblox.Routes.RbxThumbnailURL + this.logo + `/${data.x}/${data.y}/Image/` + format;
  return ImageUrl; 
}