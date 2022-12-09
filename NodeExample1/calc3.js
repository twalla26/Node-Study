var util = require('util'); // 상속 메소드 inherits 사용하기위해 require
var EventEmitter = require('events').EventEmitter; 
// EventEmitter는 events 모듈 안에 들어있기에 그 안에 속성으로 들어있는 EventEmitter 객체 참조

var Calc = function() { // 계산기 객체
    var self = this;

    this.on('stop', function() { // 계산기 객체로 전달된 stop 이벤트를 처리하기 위한 메소드
        console.log('Calc에 stop event 전달됨.');
    });
};

util.inherits(Calc, EventEmitter); // Calc 객체가 이벤트 처리를 할 수 있도록 EventEmitter 상속

Calc.prototype.add = function(a, b) { // Calc 객체 속성에 함수 추가
    return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator'; // 추가적으로 title 속성의 값으로  calculator라는 이름 지정