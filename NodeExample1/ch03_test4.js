var add = function(a, b) { // 익명 함수: 함수를 변수에 할당하는 과정에서 함수의 이름이 삭제됨.
    return a+b;
}; // 익명함수의 경우 선언문이 아닌 표현식이기 때문에 세미콜론을 붙여주자

var result = add(10, 10);

console.log('더하기 (10, 10) : %d', result);