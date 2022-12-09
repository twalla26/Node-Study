var calc = require('./calc'); //  
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));

var calc2 = require('./calc2'); // 모듈을 불러오면서 반환되는 객체: module.exports에 할당했던 객체
// -> calc2에 그 객체가 그대로 할당됨
console.log('모듈을 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));