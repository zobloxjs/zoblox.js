module.exports = function({ sizes = '420x420', format = 'png', type = 'body' } = { sizes: '420x420', format: 'png', type: 'body' }) {
  sizes = sizes.split('x');
  format = format.charAt(0).toUpperCase() + format.slice(1).toLowerCase();
    
  if (sizes.length !== 2 || !sizes.every(isFinite)) throw new Error('sizes: you inputed a invalid size format');

  const data = {
    x: +sizes[0],
    y: +sizes[1]
  }
    
  switch (type.toLowerCase()) {
    case 'headshot':
      const imageUrlHeadshot = this.zoblox.Routes.RbxThumbnailURL + this.avatar.headshot + `/${data.x}/${data.y}/AvatarHeadshot/` + format;
      return imageUrlHeadshot; 
    case 'body':
      const imageUrlBody = this.zoblox.Routes.RbxThumbnailURL + this.avatar.body + `/${data.x}/${data.y}/Avatar/` + format;
      return imageUrlBody;
      break;
    default:
  }
}