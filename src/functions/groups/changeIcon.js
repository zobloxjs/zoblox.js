const FormData = require('form-data');
const { resolveImage } = require('../../util/Util.js');
const Routes = require('../../util/Routes.js');

module.exports = async function(File) {
  try {
    const data = new FormData();
    data.append('File', await resolveImage(File), 'image.jpg');
    
    const response = await this.zoblox.session.patch(Routes.groups.icon(this.id), { 
      headers: { 
        'Content-Type': 'multipart/form-data' 
      }, 
      data
    });      
    return response;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.errors && e.response.data.errors.length ? `${e.response.status} ${e.response.data.errors.map(e => e.message)}` : `${e.response.status} ${e.response.statusText}` : e.message;
    throw new Error(err);
  }
}