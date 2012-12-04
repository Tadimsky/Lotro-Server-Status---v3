define([  
	'jquery',
	'underscore',
	'backbone',
	'models/Server'
	], 
	function($, _, Backbone, Server)
	{  
		var ServerList = Backbone.Collection.extend({
			url: '/server',
			model: Server
		});
		return ServerList;  
	}
	);
