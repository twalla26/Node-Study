// 1부터 100까지 더한 결과와 시간을 알아보자.
var result = 0;

console.time('duration_sum'); // 시간 측정 시작!, 이름은 duration_sum이란 문자열을 사용함.

for (var i = 1; i <= 1000; i++) {
    result += 1;
}

console.timeEnd('duration_sum'); // 시간 축정 끝, 위의 것과 같은 문자열 사용
console.log('1 부터 1000 까지 더한 결과물: %d', result);

console.log('현재 실행한 파일의 이름 : &s', __filename);
console.log('현재 실행한 파일의 패스 : ', __dirname);

var Person = {name: "소녀시대", age: 20};
console.dir(Person); // dir메소드: 객체 안에 들어 있는 속성들을 확인 {속성 이름1: 속성 값1, 속성 이름2: 속성 값2, ...}