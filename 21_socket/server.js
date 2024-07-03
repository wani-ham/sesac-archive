const { log } = require('console');
const express = require('express');
const app = express();
const http = require('http');
// http 모듈은 http 서버와 클라이언트 기능을 제공

const socketIO = require('socket.io');
const server = http.createServer(app);
// express application을 기반으로 http 서버 생성

const io = socketIO(server);
// HTTP Server ('server')을 'socet.io'에 binding하여 WebSocket 기능을 추가한 서버를 생성.
// 이러면 클라이언트-서버 간에 실시간 양방향 통신을 할 수 있음.

const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('client');
})

// 실습 3-2-1
const nickObjs = {};


// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
    // connection event occurs when client is connected
    console.log('Server connected :: ', socket.id);
    // socket.id: socket 고유 id (browser tab 단위)

    // 실습 1
    // const socketLog = (data, addStr) => {
    //     console.log(`Who: ${data.who}, MSG: ${data.msg}`);
    //     socket.emit(`${addStr}`, {who: 'server', msg: 'Hello Client! from ' + addStr});
    // }

    // socket.on('hello', (data) => {
    //     socketLog(data, 'hellokr');
    // })

    // socket.on('study', (data) => {
    //     socketLog(data, 'studykr');
    // })

    // socket.on('bye', (data) => {
    //     socketLog(data, 'byekr');
    // })

    // 실습 3
    io.emit('notice', `${socket.id} entered the room.`);

    // 실습 3-2
    // emit() from server
    //   - socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
    //   - io.emit(event_name, data) : 서버에 접속된 모든 클라이언트에게 전송
    //   - io.to(socketid).emit(event_name, data) : 소켓아이디에 해당되

    socket.on('setNick', (nick) => {
        console.log(`${nick} entered`);

        // 실습 3-2-1
        // front에서 입력한 nick이 nickObjs
    })
})


server.listen(PORT, () => {
    console.log(`Server running in PORT: ${PORT}`);
})

