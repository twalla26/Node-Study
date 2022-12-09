console.log('argv 속성의 파라미터 수: ' + process.argv.length);
console.dir(process.argv);
// 자바스크립트 파일을 실행하기 위해 사용한 node.exe파일이 첫 번째 파라미터가 되고
// 자바스크립트 파일의 패스가 두 번째 파라미터가 됨.
// 자바스크립트에선 배열 객체를 [] 기호를 사용해 만듦.
// dir() 메소드를 사용하면 객체가 가지고 있는 속성을 그대로 출력할 수 있음.
// argv 속성은 배열 객체이며 파일을 실행하기만 해도 node 명령과 파일 패스가 파라미터 값으로 들어감.

if (process.argv.length > 2) { // 세 번째 파라미터의 값을 확인하는 코드
    console.log('세 번째 파라미터의 값: %s', process.argv[2]); // 파일을 실행할 때, 파라미터를 추가로 전달하면 값을 확인할 수 있음.
}

process.argv.forEach(function(item, index) { // forEach() 메소드: 배열 안에 들어있는 각 아이템 값과 인덱스를 함께 전달함.
    console.log(index + ' : ', item);
});