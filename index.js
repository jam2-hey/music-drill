var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var listener = io.of('/listener');
var client = io.of('/client');

app.use(express.static('public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

client.on('connection', function(socket){
  console.log('Client connected: ' + socket.id);
  socket.on('newAlpha', newAlpha);
});

listener.on('connection', function(socket){
  console.log('Listener connected: ' + socket.id);
});

function newAlpha (data) {
    listener.emit('newAlpha', data)
    console.log(data);
}