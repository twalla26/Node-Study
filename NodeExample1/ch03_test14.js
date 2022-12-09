var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22}, {name: '티아라', age: 23}, {name: '애프터스쿨', age: 25}];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2 = Users.slice(1, 3); // slice(): 첫 번쨰 파라미터엔 복사할 요소의 시작 위치, 두 번째는 끝 위치

console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);

var Users3 = Users2.slice(1); // 하나만 복사

console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);