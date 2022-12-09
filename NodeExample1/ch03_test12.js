var Users = [{user: '소녀시대', age: 20}, {name: '걸스데이', age: 22}];
console.log('unshift() 호출 전 배열 요소의 수: %d', Users.length);

Users.unshift({name: '티아라', age: 23}); // unshift() 메소드: 배열 앞에 요소 추가
console.log('unshift() 호출 후 배열 요소의 수: %d', Users.length);

Users.shift(); // shift(): 배열 앞의 요소 삭제
console.log('shift() 호출 후 배열 요소의 수: %d', Users.length);