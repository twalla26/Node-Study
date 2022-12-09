// 프로토타입 객체는 새로운 객체가 생성되기 위한 원형이 되는 객체
function  Person(name, age) { // 일반적인 함수와 구별됨.
    this.name = name; // this: 함수를 호출한 객체
    this.age = age;
}

// 프로토타입 객체에 함수를 속성으로 추가
Person.prototype.walk = function(speed) { // Person.walk와 같은 기능을 하지만, 메모리를 아낄 수 있음.
    console.log(speed + 'km 속도로 걸어갑니다.');
}

var person01 = new Person('소녀시대', 20);
var person02 = new Person('걸스데이', 22);

console.log(person01.name + '객체의 walk(10)을 호출합니다.');
person01.walk(10);