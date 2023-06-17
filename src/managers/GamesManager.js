const GamePass = require('../structures/GamePass.js');

class GamesManager {
  constructor(zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
  }
  getPass(gamePassId) {
    return new GamePass(gamePassId, this.zoblox);
  } 
};
module.exports = GamesManager;