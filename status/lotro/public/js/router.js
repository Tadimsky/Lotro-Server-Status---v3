define([  
	'jquery',
	'underscore',
	'backbone',
	'models/Server',
	'collections/ServerList',
	'views/ServerListView'
	], 
	function($, _, Backbone, Server, ServerList, ServerListView)
	{  
		var AppRouter = Backbone.Router.extend({
			routes: {
				"*actions": "defaultRoute"
			},
			defaultRoute: function(actions)
			{
				var s1 = new Server();
				var s2 = new Server();
				var s3 = new Server();
				var serverlist = new ServerList([s1, s2, s3]);
				var v = new ServerListView({collection: serverlist});
				v.render();
				console.log(v);
				console.log(serverlist);		
			}
		});
		var initialize = function() 
		{
			var app_router = new AppRouter;			
			Backbone.history.start();
		}

		return {
			initialize: initialize
		};  
	}
);

