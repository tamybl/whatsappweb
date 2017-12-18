$(document).ready(function () {
	
	// Desplegar datos usuario clickeado
	$('.friends').click(function () {
		var name = $(this).find('.name').text();
		var photo = $(this).find('.photo-profile').html();
		var lastconection = $(this).find('.lastdate').text();
		var messageFriend = $(this).find('.lastmessage').text();
		$('#friend-panel').html('<div class="row friend-full"><div class="col-md-2"><div class="photo-profile">'+photo+'</div></div><div class="col-md-10 pad-x"><div class="name">'+name+'</div><div class="lastconection"> Ultima conexión:' +lastconection+'</div></div></div>');
		// Conversacion 
		$('#submessages').html('<span><img src="assets/img/icon-chat.png"<span><div class="inl-block"><p>'+ messageFriend+'</p><p class="hour">'+lastconection+'</p><div>');
	});

	$('#send-btn').click( function () {
		if ($('#text-send').val() !== '') {
			sendMessage(); 
		}
		else {
			alert('Ingresa un texto');
		}
	});

	$('#text-send').keyup( function (e) {
		if ($('#text-send').val() !== '') {
			if(e.keyCode == 13) {
				sendMessage();
			}
		}
		else {
			alert('Ingresa un texto');
		}
		
	})

	function sendMessage () {
		var newMessage = $('#text-send').val();
			$('#messages').append('<div class="mymessage"><p>'+newMessage+'</p><p class="hour">'+myDate()+'</p></div>');
			//$('#text-send').empty();
	}

	function myDate () {
		// Dividir Date() en un arreglo
		var arr = Date().split(" ");
		// elemento 4 del arreglo almacena HH:MM:SS. Se divide en un arreglo de 3
		var arrTime = arr[4].split(":");
		// Se toman los datos 0 (HH) y 1 (MM) y se concatenan
		var time = arrTime[0] + ":" + arrTime[1];
		return time;
	}


}) 