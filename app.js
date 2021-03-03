
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var cookieParser = require('cookie-parser');
var serveStatic = require('serve-static');
var session = require('express-session');
var errorHandler = require('errorhandler');

// Routes
var home = require('./routes/home');
var add = require('./routes/add');
var scoreboard = require('./routes/scoreboard');
var taskDescription = require('./routes/taskDescription');
var edit = require('./routes/edit');
var login = require('./routes/login');
var createGroup = require('./routes/createGroup');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser('IxD secret key'));
app.use(session({
  secret: 'IxD secret key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(serveStatic(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// API for tasks
app.use('/tasks', require('./routes/tasks'));

app.get('/', login.view);
app.get('/add', add.view);
app.get('/scoreboard', scoreboard.view);
app.get('/taskDescription', taskDescription.view);
app.get('/edit', edit.view);
app.get('/home', home.view);
app.get('/createGroup', createGroup.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
