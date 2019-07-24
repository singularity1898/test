// created by imod
// imodeg@gmail.com
let gameCfg = require('C:\\Users\\myxdsg\\Desktop\\test\\pacman_cocos2d-master\\Source\\assets\\scripts\\GameConstants.js').gameCfg;
console.log(gameCfg)
let Map = require('C:\\Users\\myxdsg\\Desktop\\test\\pacman_cocos2d-master\\Source\\assets\\scripts\\Map.js').Map;
console.log(Map)
cc.Class
({
  extends: cc.Component,

  properties:
  {
    scoreCounter: cc.Label
  },

  onLoad: function ()
  {
    this.startFull();
    this.score = 0;
  },

  restartFull: function ()
  {
    //this.scoreCounter.string = this.score;
    this.node.removeChild(this.map, true);
    this.startFull();
  },

  startFull: function ()
  {
    //this.scoreCounter.string = this.score;
    this.map = new Map(this.node, this);
  },

  update: function (dt)
  {
    this.map.update(dt);
  },
});
