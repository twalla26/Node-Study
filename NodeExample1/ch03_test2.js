var Person = {}; // 중괄호로 객체 생성

Person['age'] = 20; // 객체에 속성 추가
Person['name'] = '소녀시대';
Person.mobile = '010-1000-1000'; // . 으로도 속성 추가 및 접근 가능함

console.log('나이: %d', Person.age);
console.log('이름: %s', Person.name);
console.log('전화: %s', Person['mobile']); // 대괄호를 이용해 속성의 이름으로 접근