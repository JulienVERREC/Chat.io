$(document).ready(function(){

	var user =[];

	function save(){
		localStorage.setItem('user', JSON.stringify(user));
	};


	$(function(){
		var socket = io();
		$('form').submit(function(){
			socket.emit('chat message', $('#m').val());
			$('#m').val('');
			return false;
		});

		
		socket.on('chat message', function(msg){
			name = $('#id').val(),
			user.push(name);
			save();
			$('#messages').append($('<li>' + user[user.length-1]+ ' say: ' + msg +'</li>'));
		});

	});

});
			



	
		
		
