var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var todoApi = require('./todos');
var cors = require('cors');
var cfg = require('./config');

var app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api/todos', todoApi);

var port = cfg.port;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + server.address().port);
});
