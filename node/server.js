var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', function(req, res, next){
    var user = [
        {id: 12, name:'peter'},
        {id: 13, name:'jan'},
        {id: 14, name:'blabla'}
    ]
    res.send(user);
});

app.get('/api/users/:id', function(req, res, next){
    console.log(req.params.id);
    var user = {id: 12, name:'peter'};
    res.send(user);
});

app.post('/api/users/', function(req, res, next){
    var user = req.body;
    user.id = 15;
    res.send(user);
});

app.put('/api/users/:id', function(req, res, next){
    console.log(req.params.id);
    console.log(req.body);
    var user = {id: 12, name:'peter'};
    res.send(user);
});

app.delete('/api/users/:id', function(req, res, next){
    console.log(req.params.id);
    console.log(req.body);
    var user = {id: 12, name:'peter'};
    res.send(user);
});

app.get('/api/products', function(req, res, next){
    res.send('Sample products');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + server.address().port);
});
