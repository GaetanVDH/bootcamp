var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var todos = [
    {id: 0, title: "Test 1", completed: false},
    {id: 1, title: "Test 2", completed: true}
];

app.get('/api/todos', function(req, res, next){
    res.send(todos);
});

app.get('/api/todos/:id', function(req, res, next){
    var todo = _.find(todos, todo => todo.id == req.params.id);
    res.send(todo);
});

app.post('/api/todos/', function(req, res, next){
    var maxId = -1;
    var todo = _.max(todos, todo => todo.id);
    if(todo){
        maxId = todo.id;
    }

    var newTodo = {
        id: maxId + 1,
        title: req.body.title,
        completed: false
    }
    todos.push(newTodo);
    res.send(newTodo);
});

app.put('/api/todos/:id/', function(req, res, next){
    var todo = _.find(todos, todo => todo.id == req.params.id);
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    res.send(todo);
});

app.delete('/api/todos/:id', function(req, res, next){
    var todo = _.find(todos, todo => todo.id == req.params.id);
    todos = _.without(todos, todo);
    res.send(todo);
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + server.address().port);
});
