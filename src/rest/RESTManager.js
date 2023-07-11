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
  
  async get(url, options = {}, headers = this.headers) {                                               
    options.XCSRFRenewal = await options.XCSRFRenewal ?? true;
    
    if (options.XCSRFRenewal) await this.XCSRFRenewal(); 
    if (options.headers) (headers = { ...headers, ...options.headers });                                                    
    if (options.headers) delete options.headers;
    
    delete options.XCSRFRenewal;                                                     
    return axios({ url, headers, method: 'GET', ...options });
  }
  
  async post(url, options = {}, headers = this.headers) {                                               
    options.XCSRFRenewal = options.XCSRFRenewal ?? true;
    
    if (options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (options.headers) (headers = { ...headers, ...options.headers });                                                    
    if (options.headers) delete options.headers;
    
    delete options.XCSRFRenewal;                                                     
    return axios({ url, headers, method: 'POST', ...options });
  }
  
  async put(url, options = {}, headers = this.headers) {                                               
    options.XCSRFRenewal = options.XCSRFRenewal ?? true;
    
    if (options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (options.headers) (headers = { ...headers, ...options.headers });                                                    
    if (options.headers) delete options.headers;
    
    delete options.XCSRFRenewal;        
    return axios({ url, headers, method: 'PUT', ...options });
  }
  
  async patch(url, options = {}, headers = this.headers) {                                               
    options.XCSRFRenewal = options.XCSRFRenewal ?? true;
    
    if (options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (options.headers) (headers = { ...headers, ...options.headers });                                                    
    if (options.headers) delete options.headers;
    
    delete options.XCSRFRenewal;                                                             
    return axios({ url, headers, method: 'PATCH', ...options });
  }
  
  async delete(url, options = {}, headers = this.headers) {                                               
    options.XCSRFRenewal = options.XCSRFRenewal ?? true;
    
    if (options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (options.headers) (headers = { ...headers, ...options.headers });                                                    
    if (options.headers) delete options.headers;
    
    delete options.XCSRFRenewal;        
    return axios({ url, headers, method: 'DELETE', ...options });
  }
};
module.exports = Rest;