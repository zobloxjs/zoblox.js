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
    this.cookie = Cookie;
    this.xcsrf = XCSRF;
    this.headers = { ...this.headers, 'Cookie': '.ROBLOSECURITY=' + Cookie, 'X-CSRF-TOKEN': XCSRF };
  }
  
  async XCSRFRenewal() {
    if (this.headers) {
    try {
      const newXcsrf = await generatorXcsrf(this.cookie);
      if (newXcsrf === this.xcsrf) return;
      this.xcsrf = newXcsrf;
      this.headers['X-CSRF-TOKEN'] = newXcsrf;
      return newXcsrf;
    } catch {
      return;
    } 
  } 
} 
  
  async get(Url, Options = {}, headers = this.headers) {                                               
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;
    
    delete Options.XCSRFRenewal;                                                     
    const Request = axios.create({ method: 'GET' });
    return await Request({ url: Url, headers, ...Options });
  }
  
  async post(Url, Options = {}, headers = this.headers) { 
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true; 
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;       
    
    delete Options.XCSRFRenewal;                                                     
    const Request = axios.create({ method: 'POST' });                                                        
    return await Request({ url: Url, headers, ...Options });
  }
  
  async put(Url, Options = {}, headers = this.headers) {
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;     
    
    delete Options.XCSRFRenewal;                                                  
    const Request = axios.create({ method: 'PUT' });
    return await Request({ url: Url, headers, ...Options });
  }
  
  async patch(Url, Options = {}, headers = this.headers) {
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;     
    
    delete Options.XCSRFRenewal;                                                      
    const Request = axios.create({ method: 'PATCH' });
    return await Request({ url: Url, headers, ...Options });
  }
  
  async delete(Url, Options = {}, headers = this.headers) {
    Options.XCSRFRenewal = Options.XCSRFRenewal ?? true;   
    
    if (Options.XCSRFRenewal) await this.XCSRFRenewal();                               
    if (Options.headers) (headers = { ...headers, ...Options.headers });                                                    
    if (Options.headers) delete Options.headers;
    
    delete Options.XCSRFRenewal;                                                       
    const Request = axios.create({ method: 'DELETE' });
    return await Request({ url: Url, headers, ...Options });
  }
};
module.exports = Rest;