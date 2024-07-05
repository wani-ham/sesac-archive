const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');
const PORT = 8000;

const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
})

// user list
function getUserList(room) {
    const users = []; // save every users entered the room

    // room는 접속 한 룸 id
    // 특정 채팅방에 접속한 socket.id 집합 값을 찾음
    const clients = io.sockets.adapter.rooms.get(room);

    //  Set {"1234" , "5678"};

    // 'io' 객체
    // - Socket.IO 인스턴스를 나타내는 객체 :: 전체 소켓 서버를 관리.

    // 'io.sockets'
    // - 현재 연결된 모든 소켓들을 관리하는 객체 :: 소켓들의 상태를 관리하고 다양한 소켓 관련 작업 수행.

    // 'io.sockets.adapter'
    // - 소켓 서버 간의 상태를 관리하는 역할을 담당하는 객체 :: 소켓들의 연결 상태와 방(room) 정보를 관리.

    // 'io.sockets.adapter.room'
    // - 모든 방(room) 정보를 저장하고 있는 객체 :: 각 방에 접속한 클라이언트들의 정보를 포함.

    // 'get(room)'
    // - 위 객체에서 특정 방(room) ID에 해당하는 정보를 가져오는 역할 :: 해당 방에 접속한 클라이언트들의 소켓 ID 들을 Set형태로 반환.

    if (clients) {
        clients.forEach((client) => {
            const userSocket = io.sockets.sockets.get(client);
            const info = {userName : userSocket.userName, key : client};
            users.push(info);
        })
    }
    return users;
}

io.on('connection', (socket) => {
    console.log(`Server connected :: ${socket.id}`);

    // make chat room
    socket.on('create', (res) => {
        console.log(res);

        socket.roomName = res.roomName;
        socket.userName = res.userName;

        // notice
        socket.to(res.roomName).emit('notice', `${socket.userName} entered the room`);

        // update user list
        const userList = getUserList(res.roomName);
        io.to(res.roomName).emit('userList', userList);
    })

})

server.listen(PORT, () => {
    console.log(`Server running in PORT: ${PORT}`);
})