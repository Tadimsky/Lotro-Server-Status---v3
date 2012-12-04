// Filename: views/projects/list
define([
	'jquery',
	'underscore',
	'backbone',
  // Pull in the Collection module from above
  'collections/ServerList',
  'views/ServerView'
  ], 
  function($, _, Backbone, ServerList, ServerView){
  	var ServerListView = Backbone.View.extend({
  		tagName: "div",
  		className: "game",
  		el: $("#serverlist"),

  		render : function() {  	

  			_.each(this.collection.models, function (server)
  			{			 

  				var v = new ServerView({model: server});
  				this.$el.append(v.render());
  			}, this);  			
  		}
  	});
  	return ServerListView;
  });