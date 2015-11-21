var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var listener = io.of('/listener');
var client = io.of('/client');

var users = {};

app.use(express.static('public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

client.on('connection', function(socket){
  console.log('Client connected: ' + socket.id);
  socket.on('beat', beatRecived);
  socket.on('default', defaultRecived);
  socket.on('disconnect', function () {
     var id = this.id;
     delete users[id];
     listener.emit('user_update', users);

     console.log('Disconnected: ' + id);
     console.log('user_update', users);
  });
});

listener.on('connection', function(socket){
  console.log('Listener connected: ' + socket.id);
});

function defaultRecived(data) {
    var id = this.id;
    users[id] = data;
    listener.emit('user_update', users);

    console.log('default: ', data);
    console.log('user_update', users);
}

function beatRecived (data) {
    listener.emit('beat', data);
    console.log('beat: ', data);
}