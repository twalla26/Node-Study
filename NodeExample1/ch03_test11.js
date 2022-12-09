var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22}];
console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

Users.push({name: '티아라', age: 23}); // push() 메소드: 배열 끝에 요소 추가
console.log('push() 호출 후 요소의 수 : %d', Users.length);

Users.pop(); // pop() 메소드: 배열 끝의 요소 삭제
console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);