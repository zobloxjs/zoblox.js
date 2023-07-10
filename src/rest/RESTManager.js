const generatorXcsrf = require('../methods/generatorXcsrf.js');
const axios = require('axios');
const Routes = require('../util/Routes.js');

class Rest {
  constructor(options = {}) {
    this.headers = { 'Content-Type': 'application/json' };
    if ('timeout' in options) {
      this.timeout = +options.timeout;
      axios.defaults.timeout = +options.timeout;
    } else {
      this.timeout = 0;
    }
  }
  async setCookie(Cookie) {
    const XCSRF = await generatorXcsrf(Cookie);
    this.headers = { ...this.headers, 'Cookie': '.ROBLOSECURITY=' + Cookie, 'X-CSRF-TOKEN': XCSRF };
    this.Cookie = Cookie;
    this.XcsrfToken = XCSRF;
  }
  
  async XCSRFRenewal() {
    if (!this.headers['Cookie'] || !this.headers['X-CSRF-TOKEN']) return;
    try {
      const newXcsrf = await generatorXcsrf(this.Cookie);
      if (newXcsrf === this.headers['X-CSRF-TOKEN']) return;
      this.headers['X-CSRF-TOKEN'] = newXcsrf;
      this.XcsrfToken = newXcsrf;
      return newXcsrf;
    } catch {
      return;
    } 
  } 
  
  async get(url, Options = {}, headers = this.headers) {                                               
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;
    
    delete Options.XCSRFRenewal;                                                     
    return await axios({ url, headers, method: 'GET', ...Options });
  }
  
  async post(url, Options = {}, headers = this.headers) {                                               
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;
    
    delete Options.XCSRFRenewal;                                                     
    return await axios({ url, headers, method: 'POST', ...Options });
  }
  
  async put(url, Options = {}, headers = this.headers) {                                               
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;
    
    delete Options.XCSRFRenewal;   
    return await axios({ url, headers, method: 'PUT', ...Options });
  }
  
  async patch(url, Options = {}, headers = this.headers) {                                               
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;
    
    delete Options.XCSRFRenewal;                                                     
    return await axios({ url, headers, method: 'PATCH', ...Options });
  }
  
  async delete(url, Options = {}, headers = this.headers) {                                               
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;
    
    delete Options.XCSRFRenewal;                                                     
    return await axios({ url, headers, method: 'DELETE', ...Options });
  }
};
module.exports = Rest;