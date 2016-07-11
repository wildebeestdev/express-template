var express     = require('express');
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var env         = require('dotenv').config();
var port        = 3000;

var routes      = require('./routes/app');

var app         = express();

app.options('*', cors());

// configure Express
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

// Handle 404
app.use(function(req, res) {
   res.send('404: Path not Found', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
   res.send('500: Internal Server Error', 500);
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});