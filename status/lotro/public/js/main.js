require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		cookie : {
			deps: ["jquery"]
		}
	},
	paths: {
		jquery: "http://code.jquery.com/jquery-1.8.3.min",
		underscore: "libs/underscore-min",		
		backbone: "libs/backbone-min",
		text: "libs/text",
		templates: "../templates",
		cookie: "libs/jquery-cookie"
	}
});

require([
		'app',
	], 
	function (App)
	{
		App.initialize();
	}
);