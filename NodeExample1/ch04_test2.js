process.on('exit', function() { // process 객체: 노드에서 언제든 사용가능한 객체, 이미 내부적으로 EventEmitter를 상속받도록 만들어져 있음.
    // 이벤트 이름을 exit로 설정 -> exit이라는 이벤트가 발생했을 떄(process가 끝날 때)를 알 수 있음.
    // function은 이벤트 리스너로서, 해당 이벤트가 전달되었을 때, 그 이벤트를 처리하는 역할
    console.log('exit 이벤트 발생함.');
});

setTimeout(function() { // setTimeout 메소드 호출: 주어진 밀리초 후에 콜백 함수 실행, setTimeout(실행할 함수, 지연시간)
    // 이건 함수 정의가 아니라 setTimeout이라는 메소드 자체를 호출하였으므로 실행되는 것임! 헷갈리지 말자
    console.log('2초 후에 시스템 종료 시도함.');
    process.exit(); // 수동 프로세스 종료
}, 2000);
