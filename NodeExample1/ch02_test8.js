var path = require('path'); // path 내장 모듈 불러오기

// 디렉터리 이름 합치기
var directories = ["user", "mike", "docs"]; // 배열 객체
var docsDirectory = directories.join(path.sep); // 배열 객체의 joins 메소드로 하나의 디렉터리로 만듦.
console.log('문서 디렉터리: %s', docsDirectory);

// 디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepad.exe'); // path 객체의 join 메소드로 파일 이름 합침.
console.log('파일 패스: %s', curPath);


// 패스에서 디렉터리, 파일이름, 확장자 구별하기
var filename = "C:/Users/mike/notepade.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('디렉터리: %s, 파일 이름: %s, 확장자: %s', dirname, basename, extname);