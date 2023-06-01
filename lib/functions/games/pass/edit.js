module.exports = async function(Data) {
 try {
   const response = await this.zoblox.session.post(this.zoblox.Routes.updateGamePass, {
     body: { 
       id: this.id, 
       ...Data
    }});
    return response;
  } catch (e) {
    if (e.response && e.response.headers['content-type'].includes('text/html')) throw new Error("You don't have permissions to do that.");
    if (e.response && e.response.data.error) throw new Error(e.response.data.error);
    if (!e.response) throw new Error(e.message);
  }
}