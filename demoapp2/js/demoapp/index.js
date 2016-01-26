"use strict";

const
	http = require("http"),
	express = require("express");

let	count = 10;

while (count--) {

let
        port = 8090 - count,
	app = express(),
        server = http.createServer(app);

app.use(function(req, res, next) {

	console.log("node app on port " + port);
	next();
});

app.use(express.static("www"));


server.listen(port, function(err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log("web server started on port " + port);
});

}
