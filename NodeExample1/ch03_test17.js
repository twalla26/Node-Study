function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0;
    var history = function() { // 함수 표현식, 익명 함수
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    };
    return history; // 함수를 반환함
} 

var add_history = add(10, 10, function(result) { // add 함수 실행 후, 반환값 add_history 변수에 저장
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과: %d', result);
}); // 전과 같이 add_history 변수에는 history 함수가 할당됨.

console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history()); // add_history 함수가 실행될 때마다 count는 1씩 증가하여 반환됨.
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history()); // count 변수는 add 함수 안에서 만들어진 것이지만, add 함수에서 반환된 함수 객체에서는 접근 가능
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history()); 
// 반환된 history 함수가 실행될 시점엔 add 함수는 접근 불가 -> count 객체 역시 접근 불가능하지만, 함수 안에서 새로운 함수를 반환하는 경우에는 예외적으로 접근을 허락함.