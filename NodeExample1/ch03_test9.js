var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22}];

var add = function(a, b) { // 함수 선언 후,
    return a + b;
};

Users.push(add); // Users 배열에 그대로 추가

console.log('배열 요소의 수: %d', Users.length);
console.log('세 번째 요소로 추가된 함수 실행: %d', Users[2](10, 10)); // 배열에 추가된 함수에 접근하여 함수 실행