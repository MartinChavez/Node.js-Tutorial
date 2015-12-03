/* Web Sockets */
/*
 - Web sockets allow the creation of connections between clients and server.
 - On these connections, data can flow (back and forward) in real time
 */

/* Socket.io */
/*
 - Great tool for real-time applications
 - Provides fallbacks in case the client doesn't support web sockets

 Install by running:
 npm install --save socket.io
 */
var express = require('express');
var app = express();
// Create an http server and dispatch the requests to express
var server = require('http').createServer(app);
// Load the socket.io module and allow it to use the http server to listen for requests
var io = require('socket.io')(server);

// Listen for connection events (on socket.io) and define the callback function
io.on('connection', function (client) {
    console.log('Client connected...');
    // Emits the 'messages' event on the clients and sends the object {socket:io}
    client.emit('messages', {socket: 'i.o'})

    client.on('fromClient', function (data) {
        console.log(data);
        // Use broadcast to send a message to all the clients that are connected
        client.broadcast.emit("fromServer", {fromServer: 'fromServer'});
    });

})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/socket.html');
});

server.listen(8080);

/*
 Run the following cmd to start node and create the scoket.io server:
 node '13 - Socket.io.js'

 - See socket.html for client-side code

 On your browser: localhost:8080

 Expected response:
 - console.log with "i.o", numbers should be printed
 - On node, the numbers should keep counting up
 */