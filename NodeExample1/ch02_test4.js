var calc = {}; // calc 객체 생성
calc.add = function(a, b) { // calc 객체에 add 속성 추가 후 더하기 함수 할당
    return a + b;
}

console.log('모듈로 분리하기 전 = calc.add 함수 호출 결과 : %d', calc.add(10, 10)); // 함수 호출