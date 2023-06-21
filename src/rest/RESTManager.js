const generatorXcsrf = require('../methods/generatorXcsrf.js');
const axios = require('axios');
const Routes = require('../util/Routes.js');

module.exports = class Rest {
  constructor(options = {}) {
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
    this.headers = { 'Cookie': '.ROBLOSECURITY=' + Cookie, 'X-CSRF-TOKEN': XCSRF, 'Content-Type': 'application/json' };
  }
  
  async get(Url, Options = {}, headers = this.headers) { if (!Url.includes(Routes.RobloxDomain)) throw new Error(`The Domain Must Be Includes '${Routes.RobloxDomain}'.`);
    Options.headers ? (headers = { ...headers, ...Options.headers }) : headers;                                                        
    Options.headers ? delete Options.headers : null;                                 
    const request = axios.create({ method: 'GET' });
    return await request({ url: Url, headers, ...Options });
  }
  
  async post(Url, Options = {}, headers = this.headers) { if (!Url.includes(Routes.RobloxDomain)) throw new Error(`The Domain Must Be Includes '${Routes.RobloxDomain}'.`); 
    Options.headers ? (headers = { ...headers, ...Options.headers }) : headers;                                                         
    Options.headers ? delete Options.headers : null;                                 
    Options.body ? (Options.data = Options.body) : null;
    Options.body ? delete Options.body : null;
    const request = axios.create({ method: 'POST' });
    return await request({ url: Url, headers, ...Options });
  }
  
  async put(Url, Options = {}, headers = this.headers) { if (!Url.includes(Routes.RobloxDomain)) throw new Error(`The Domain Must Be Includes '${Routes.RobloxDomain}'.`);
    Options.headers ? (headers = { ...headers, ...Options.headers }) : headers;                                                         
    Options.headers ? delete Options.headers : null;                                                                                     
    Options.body ? (Options.data = Options.body) : null;
    Options.body ? delete Options.body : null;
    const request = axios.create({ method: 'PUT' });
    return await request({ url: Url, headers, ...Options });
  }
  
  async patch(Url, Options = {}, headers = this.headers) { if (!Url.includes(Routes.RobloxDomain)) throw new Error(`The Domain Must Be Includes '${Routes.RobloxDomain}'.`);
    Options.headers ? (headers = { ...headers, ...Options.headers }) : headers;                                                         
    Options.headers ? delete Options.headers : null;                                                                                       
    Options.body ? (Options.data = Options.body) : null;
    Options.body ? delete Options.body : null;
    const request = axios.create({ method: 'PATCH' });
    return await request({ url: Url, headers, ...Options });
  }
  
  async delete(Url, Options = {}, headers = this.headers) { if (!Url.includes(Routes.RobloxDomain)) throw new Error(`The Domain Must Be Includes '${Routes.RobloxDomain}'.`);
    Options.headers ? (headers = { ...headers, ...Options.headers }) : headers;                                                         
    Options.headers ? delete Options.headers : null;                                                                                        
    const request = axios.create({ method: 'DELETE' });
    return await request({ url: Url, headers, ...Options });
  }
};