define([
	'jquery',
	'underscore',
	'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/server.html'
  ], 
  function($, _, Backbone, servertemplate){
  	var ServerView = Backbone.View.extend({
  		tagName: "tr",
  		className: "server",
  		initialize: function()
  		{
  			this.render();
  		},

  		render : function()
  		{  			
  			console.log(this.model);
  			var template = _.template(servertemplate, this.model.toJSON()); 
  			$(this.el).html(template);
			return this.el;			
  		},
  		events: {
  			'click .name': 'handeClick'
  		},
  		handeClick : function(){
  			alert("Hello");
  		}
  	});
  	return ServerView;
  });