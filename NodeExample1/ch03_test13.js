var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22}, {name: '티아라', age: 23}];
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수: %d', Users.length);

delete Users[1]; // delete 키워드: 배열 중간의 요소를 삭제할 때 사용하는 메소드
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users) // dir메소드: 자바스크립트 객체의 속성 출력


Users.splice(1, 0, {name: '애프터스쿨', age: 25}); // splice(): 요소를 추가하려면 두 번째 파라미터의 값을 0으로 입력한 후, 추가할 객체 전달 
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users); // dir: 객체의 속성 출력

Users.splice(2, 1); // splice(): 요소를 삭제하려면 두 번째 파라미터의 값에 삭제할 요소 수 입력
console.log('splice()로 인덱스 2의 요소를 1개 삭제한 후');
console.dir(Users);