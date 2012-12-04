
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path')
  , engine = require('ejs-locals');

var db = require('./db');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.engine('ejs', engine);
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


// Routes
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/updateservers', api.updateservers);
app.get('/servers', api.servers);
app.get('/status', api.status);

// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


// Handle Errors
app.use(function(req, res, next){
  res.send(404, 'Sorry cant find that!');
});