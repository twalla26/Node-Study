var Person = { // 객체를 생성하면서 속성을 바로 넣어줌.
    age: 20,
    name: '소녀시대',
    add: function(a, b) {
        return a + b;
    }
};

console.log('더하기: %d', Person.add(10, 10));