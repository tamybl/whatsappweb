$(document).ready(function () {
	
	// Desplegar datos usuario clickeado
	$('.friends').click(function () {
		var name = $(this).find('.name').text();
		var photo = $(this).find('.photo-profile').html();
		var lastconection = $(this).find('.lastdate').text();
		var messageFriend = $(this).find('.lastmessage').text();
		$('#box-messages').html('<div class="row margin-0"><header class="col-md-12 friend-panel" id="friend-panel"><div class="row friend-full"><div class="col-md-2"><div class="photo-profile">'+photo+'</div></div><div class="col-md-10 pad-x"><div class="name">'+name+'</div><div class="lastconection"> Ultima conexión:'+lastconection+'</div></div></div></header><div class="col-md-12 messages" id="messages"><div class="box-submessage" id="submessages"><p>	Mensaje de ejemplo</p></div></div><div class="col-md-12 send-messages" ><input type="text" id="text-send" placeholder="Escribe tu mensaje aquí"><button id="send-btn"><i class="fa fa-microphone fa-lg" aria-hidden="true"></i></button></div></div>');
		// Conversacion 
		$('#submessages').html('<div class="inl-block"><p>'+ messageFriend+'</p><p class="hour">'+lastconection+'</p><div>');

		$('#send-btn').on("click", function () {
			if ($('#text-send').val() !== '') {
				sendMessage(); 
			}
		});

		$('#text-send').on("keyup keypress", function (e) {
			if ($('#text-send').val() !== '') {
				$('#send-btn').html('<i class="fa fa-paper-plane fa-lg" aria-hidden="true"></i>');
				if(e.keyCode == 13) {
					sendMessage();
				}
			}
			else {
				$('#send-btn').html('<i class="fa fa-microphone fa-lg" aria-hidden="true"></i>');
				//alert('Ingresa un texto');
			}	
		})
	});

	function sendMessage () {
		var newMessage = $('#text-send').val();
			$('#messages').append('<div class="mymessage"><p>'+newMessage+'</p><p class="hour">'+myDate()+'</p></div>');
			$('#text-send').val('');
			$('#send-btn').html('<i class="fa fa-microphone fa-lg" aria-hidden="true"></i>');
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