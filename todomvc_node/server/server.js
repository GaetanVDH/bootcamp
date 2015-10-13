var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var _ = require('underscore');
var todoApi = require('./todos');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api/todos', todoApi);

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + server.address().port);
});
