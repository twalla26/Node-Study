var os = require('os');

console.log('시스템의 hostname: %s', os.hostname()); // 운영체제의 호스트 이름
console.log('시스템의 메모리: %d / %d', os.freemem(), os.totalmem()); // freemem: 사용가능한 메모리 용량, totalmem: 전체 메모리 용량
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus()); 
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces()); // 