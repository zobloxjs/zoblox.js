class GamePass {
  constructor(GamePassId, zoblox) {
    Object.defineProperty(this, 'zoblox', { value: zoblox });
    this.id = GamePassId;
  }
};
module.exports = GamePass;
