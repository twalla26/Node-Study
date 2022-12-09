var Calc = require('./calc3'); 
// 먼저 require 메소드로 calc3.js 모듈 파일 안에 정의해 둔 Calc 객체를 변수에 저장

var calc = new Calc(); // new 연산자로 인스턴스 객체 생성
calc.emit('stop'); // emit 메소드로 stop 이벤트 전달 -> stop 이벤트의 리스너 함수 실행됨

console.log(Calc.title + '에 stop 이벤트 전달함.');
