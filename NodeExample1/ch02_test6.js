var nconf = require('nconf'); // 다른 사람들이 만든 모듈이므로 패스를 뺀 이름만 지정
nconf.env();

console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));