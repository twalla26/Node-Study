var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22}, {name: '티아라', age: 23}];

console.log('배열 요소의 수: %d', Users.length); // 배열 요소 수 출력
for (var i = 0; i < Users.length; i++) { // for문 사용
    console.log('배열 요소 #' + i + ' %s', Users[i].name);
}

// forEach 구문을 이용하여 배열 요소 확인하기
console.log('\nforEach 구문 사용하기');
Users.forEach(function(item, index) { // forEach메소드를 호출할 땐 함수를 파라미터로 전달함.
    console.log('배열 요소 #' + index + ' : %s', item.name); 
});