var mongoose = require('mongoose');
var db = mongoose.createConnection("mongodb://norboglirbane:norboglir@ds033757.mongolab.com:33757/heroku_app9592075");

var serverSchema = new mongoose.Schema({
	name: String,
	url: String
});

exports.Server = db.model("server", serverSchema);