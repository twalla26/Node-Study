var url = require('url'); // require 메소드로 url 모듈 객체를 url 변수에 저장

// 주소 문자열을 URL 객체로 만들기 -> 밑에서 dir 메소드로 속성들을 살펴볼 거임
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL); // URL 객체의 속성들을 나열


// 요청 파라미터 구분하기
var querystring = require('querystring'); // require 메소드로 불러온 querystring 모듈을 반환 받아 querystring 변수에 저장
var param = querystring.parse(curURL.query); 
// querysting 모듈의 parse 메소드: 요청 파라미터의 문자열을 파싱하여 객체로 만들어 줌.
// 파싱된 객체에는 각각의 요청 파라미터들이 속성으로 추가되어 있어 속성 값을 참조하면 각각의 요청 파라미터를 사용할 수 있음.
console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
// stringify메소드: 객체 안에 들어있는 요청 파라미터를 다시 하나의 문자열로 바꿈.