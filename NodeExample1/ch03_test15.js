// 콜백 함수
function add(a, b, callback) { // 함수를 종료하는 return 키워드를 지우고 
    var result = a + b; // 더하기 연산을 한 결과 값을 result에 저장한 후,
    callback(result); // 그 결과 값은 파라미터로 전달된 콜백 함수를 호출하면서 그 콜백함수로 전달함
} // add 함수는 먼저, a, b로 받은 값으로 연산하며, 그 결과값을 callback 함수의 파라미터로 전달하면서 콜백함수를 호출함

add(10, 10, function(result2) { // add 함수가 실행되고, callback(20)이 호출된다. {}는 파라미터로 받은 function에 대한 정의이다. 위의 callback 함수라고 생각하면 되겠다.
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과 : %d', result2);
})