var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ent = require('ent');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname +'/'))

app.get('/', function(req,res){
	res.send(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', ent.decode(msg));
	});
});

http.listen(3000, function(){
	console.log('listening on port 3000');
});








