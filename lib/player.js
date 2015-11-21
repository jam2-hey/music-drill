var util = require('util');

var player = function (instType) {
    // set user's instrument selection
    this.instType = instType || 'inst1';
    // set some default setting
    this.playDuration = 1;
    this.playPitch = 1;
    // init AudioContext instance
    this.audioContext = new AudioContext();
    this.startTime = new Date().getTime();
};

var pp = player.prototype;

pp.countTime = function () {
    // 計算現行時間給 play 使用
};
pp.play = function () {
    // util.log('music start');
};
pp.stop = function () {
    // util.log('music stop');
};
pp.inst1 = function () {
    // util.log('play inst1');
};
pp.inst2 = function () {
    // util.log('play inst2');
};
pp.inst3 = function () {
    // util.log('play inst3');
};

module.exports = player;
