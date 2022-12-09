var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';
Person.add = function(a, b) { // 객체의 속성에 함수 할당
    return a + b;
};

var sub = function(a, b) { // 변수에 함수를 할당한 후,
    return a - b;
};
Person['sub'] = sub; // 함수가 할당된 변수를 객체의 속성에 저장할 수 있음

console.log('더하기 : %d', Person.add(10, 10));
console.log('빼기 : %d', Person.sub(10, 10));