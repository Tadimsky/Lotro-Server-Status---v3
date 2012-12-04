var db = require("../db");
var soapClient = require("node-soap-client").SoapClient;


exports.updateservers = function(req, res)
{	
	new soapClient({wsdl: "http://moria.gls.lotro.com/GLS.DataCenterServer/Service.asmx?WSDL"}).init(function(err, metabus)
	{
		var datacenters = metabus.GetDatacenters();
		//datacenters.

	});
	// Write the Server Name
	// Write the Status URL
	res.send("hobag");
}

exports.servers = function(req, res)
{	
	var sf;
	db.Server.find({}, function(err, servers)
		{
			//res.set({ 'Content-Type': 'application/json' });
			res.json(servers);
		});
	
}

exports.status = function (req, res)
{
	db.Server.find({name: }, function(err, server)
	{

	});
}