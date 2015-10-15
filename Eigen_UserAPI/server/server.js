var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var userApi = require('./routes/users');
var cors = require('cors');
var mongoose = require('mongoose');
var cfg = require('./config');
var User = require('./models/user');
var auth = require('./middleware/authorization');
var errorHandler = require('./middleware/globalErrorHandler');
var dataGenerator = require('./config/dataGenerator');

var app = express();

app.use(cors());
app.use(morgan('dev'));

//Add security

app.use(auth('test'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//setup db
mongoose.connect('mongodb://localhost/demo');

app.use('/api/users', userApi);

//fill db
if(User.findOne({}, function(err, user){
    if(!user){
        dataGenerator.fillDb();
    }
}));

app.use(errorHandler());

var port = cfg.port;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + server.address().port);
});
