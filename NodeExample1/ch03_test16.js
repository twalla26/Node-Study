function add(a, b, callback) { // 함수 선언식
    var result = a + b; // 연산값 저장한 후
    callback(result); // 그 값을 콜백 함수 호출

    var history = function() { // history 함수 표현식(익명 함수), 선언문 X, 표현식 O -> ; 붙여주자
        return a + ' + ' + b + ' = ' + result; // history 함수의 반환값
    };

    return history; // add 함수의 반환 값 -> history 함수 --> history 함수 실행
}


var add_history = add(10, 10, function(result) { // add함수를 실행한 후 반환받은 함수 객체를 add_history 변수에 할당
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (10, 10)의 결과 : %d', result); // 일단, 10, 10 연산후 콜백 함수 호출 및 실행
    // 변수 add_history에는 history 함수가 할당됨
});

console.log('결과 값으로 받은 함수 실행 결과: ' + add_history()); // add_history 객체(함수) 실행

