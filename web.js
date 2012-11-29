var express = require('express');
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(" mongodb://norboglirbane:norboglir@ds033757.mongolab.com:33757/heroku_app9592075", 
	function (err, db)
	{
		if (!err)
			console.log('connected');
	}
);

var app = express.createServer(express.logger());
app.configure( function() {

});

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});