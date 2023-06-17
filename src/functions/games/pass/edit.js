const Routes = require('../../../util/Routes.js');

module.exports = async function(Data) {
 try {
   const response = await this.zoblox.session.post(Routes.updateGamePass, {
     body: { 
       id: this.id, 
       ...Data
    }});
    return response;
  } catch (e) {
    const err = e.response ? e.response.data && e.response.data.error ? `${e.response.status} ${e.response.data.error}` : "You don't have permissions to do that." : e.message;
    throw new Error(err);
  }
}