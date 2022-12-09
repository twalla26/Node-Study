process.on('tick', function(count) { // tick 이벤트 등록 -> 이벤트가 전달되면 콜백 함수가 실행됨.
    console.log('tick 이벤트 발생함 : %s', count);
});

setTimeout(function() {
    console.log('2초 후에 tick 이벤트 전달 시도함.');

    process.emit('tick', '2'); // tick 이벤트 직접 생성 후, emit 메소드로 tick 이벤트를 process 객체로 전달
}, 2000);