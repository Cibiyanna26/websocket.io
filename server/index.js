const http = require('http');
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app,(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Helloworld\n')
});

const io = socketIo(server);


server.listen(3000,'127.0.0.1',()=>{
    console.log('Server running at port 3000')
})
