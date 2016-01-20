"use strict";

const fs = require("fs");

//var data = fs.readFileSync("demo.js", "utf-8");

function wfcb(err) {
                console.log("data written");
                console.log(data.length);
}


fs.readFile("demo.js", "utf-8", function(err, data) {
	console.log(data.length);
	fs.writeFile("demo2.js", data, "utf-8", wfcb);
	
});
console.log("made it here");


//console.log(data.length);

