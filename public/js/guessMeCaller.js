/*-----------------
guessMeCaller.js
Sends guess requests to the server
and prints out the result
-----------------*/

$(document).ready(function(){
	$("#guessButton").click(function(){
		var request = {guess:$("#guessValue").val()};
		var page = "guessMeAJAX";
		$.post(page, request, function(data){
			$("ul#guessList").prepend(data);
		}).fail(function(){
			alert("POST failed.");
		});
	});
});