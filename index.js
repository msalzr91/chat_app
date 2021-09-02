var express = require('express');
var socket = require('socket.io');

const PORT = process.env.PORT || 5500;

var app = express();
var server = app.listen(PORT,function(){
	console.log('listening to requests on port somthing. nice.')
	});

//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection', function(socket){
	console.log('made socket connection. nice.', socket.id);

	//Handle chat event
	socket.on('chat', function(data){
		io.sockets.emit('chat', data);
	});

socket.on('typing', function(data){
	socket.broadcast.emit('typing', data)
})

});

