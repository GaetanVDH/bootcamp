var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var userApi = require('./routes/users');
var cors = require('cors');
var mongoose = require('mongoose');
var cfg = require('./config');
var User = require('./models/user');
var dataGenerator = require('./config/dataGenerator');

var app = express();

app.use(cors());
app.use(morgan('dev'));

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

var port = cfg.port;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + server.address().port);
});
