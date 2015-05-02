/*---------------------------
startXServer.js
Server start example for node.js express
----------------------------*/

var config = require("./XServer/config");
var router = require("./XServer/router");
var server = require("./XServer/functions");

var server = config.server.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('XServer listening at http://%s:%s', host, port);
});