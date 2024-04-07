const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io')
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    io.emit('notification','new message')
});
clients = 0
io.on('connection',(socket)=>{
    clients++;
    socket.emit('broadcast',{description: clients + 'connected'});
    socket.on('disconnect',()=>{
        clients--;
        socket.broadcast.emit('broadcast',{description: clients + 'disconnected'});
    })
})

// io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

server.listen(3000, () => {
    console.log('listening on *:3000');
});
