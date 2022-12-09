var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22}]; // 배열 [] 선언! 
// 배열 안에는 name, age 속성을 가진 객체 2개 있음.

Users.push({name: '티아라', age: 23}); // 배열에 요소를 추가할 땐 push 메소드 사용

console.log('사용자 수 : %d', Users.length);
console.log('첫 번째 사용자 이름 : %s', Users[0].name);