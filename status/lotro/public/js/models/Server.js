define([  
	  'jquery',
	  'underscore',
	  'backbone'
	], 
	function($, _, Backbone)
	{  
		var Server = Backbone.Model.extend({
			defaults: function() {
				return {
					name: "Brandywine",
					status: "Online"
				}
			},

			initialize: function () {

			},

			update: function()
			{
				// update the status from the API
			}
		});
  		return Server;  
  	}
);
