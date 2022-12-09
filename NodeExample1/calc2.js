var calc = {}; // calc 객체 생성

calc.add = function(a, b) { // 객체의 속성으로 더하기 함수 할당
    return a + b;
}; // exports 속성으로 만들지는 않음.

module.exports = calc; // module.exports에 calc 객체 할당 -> calc 객체는 모듈을 불러들이는 쪽에서 그대로 사용할 수 있음.