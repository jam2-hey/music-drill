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
    this.endTime = startTime + this.playDuration;
    this.oscillator = audioContext.createOscillator();
};

var pp = player.prototype;

pp.countTime = function () {
    // 計算現行時間給 play 使用
};
pp.play = function (osc) {
    var self = this;
    var osc = osc || self.oscillator;
    osc.start(self.startTime);
    // util.log('music start');
};
pp.stop = function (osc) {
    var self = this;
    var osc = osc || self.oscillator;
    osc.stop(self.endTime);
    // util.log('music stop');
};
pp.inst1 = function () {
    var self = this;
    // create Oscillator
    var oscillator = self.oscillator;
    // create gain node
    // set type
    oscillator.type = 'triangle';
    // osc connect to gain
    // connect to dis
    oscillator.connect(this.audioContext.destination);
    // set freq, detune
    oscillator.detune.value = self.playPitch * 100;
    // osc start
    play(osc);
    // util.log('play inst1');
};
pp.inst2 = function () {
    var self = this;
    // create Oscillator
    var oscillator = self.oscillator;
    // create gain node
    oscillator.connect(this.audioContext.destination);
    // set type
    oscillator.type = 'triangle';
    // osc connect to gain
    // connect to dis
    oscillator.connect(this.audioContext.destination);
    // set freq, detune
    oscillator.detune.value = self.playPitch * 100;
    // osc start
    play(osc);
    // util.log('play inst2');
};
pp.inst3 = function () {
    var self = this;
    // create Oscillator
    var oscillator = self.oscillator;
    // create gain node
    oscillator.connect(this.audioContext.destination);
    // set type
    oscillator.type = 'triangle';
    // osc connect to gain
    // connect to dis
    oscillator.connect(this.audioContext.destination);
    // set freq, detune
    oscillator.detune.value = self.playPitch * 100;
    // osc start
    play(osc);
    // util.log('play inst3');
};

module.exports = player;
