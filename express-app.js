var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var fs = require("fs");
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var objectIds = {
	friendId: 0
};

var friends = [];

app.post("/api/v1/friends", function(req, res) {
	req.body.id = ++objectIds.friendId;
	friends.push(req.body);

    res.set("Content-type", "application/json");
	res.send(JSON.stringify({ id: req.body.id }));
});

app.put("/api/v1/friends/:id", function(req, res) {
	var friend = friends.filter(f => f.id == req.params.id)[0];
	friend.nickname = req.body.nickname;
});

app.get("/api/v1/friends", function(req, res) {
    res.set("Content-type", "application/json");
	res.send(JSON.stringify(friends));
});

app.get("/*", function(req, res) {
	var filePath = req.originalUrl;

	if(filePath === "/") 
		filePath = "./index.html";
	else {
		filePath = "./" + filePath;
	}

	var indexOfQuerySymbol = filePath.indexOf("?");

	if(indexOfQuerySymbol > -1) {
		filePath = filePath.substring(0, indexOfQuerySymbol);
	}

	switch(path.extname(filePath)) {
		case ".html":
			res.set("Content-type", "text/html");
			break;

		case ".js":
			res.set("Content-type", "text/javascript");
			break;

		case ".css":
			res.set("Content-type", "text/css");
			break;

		case ".woff":
		case ".woff2":
		case ".ttf":
		case ".eot":
			res.set("Content-type", "application/font-woff");
			break;

	}

	res.send(fs.readFileSync(filePath, "utf8"));
});

server.listen(8888, function () {
    console.log("Node server running on http://localhost:8888");
});