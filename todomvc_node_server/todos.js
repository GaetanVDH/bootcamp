var express = require('express');
var _ = require('underscore');
var router = express.Router();

var todos = [
    {id: 0, title: "Test 1", completed: false},
    {id: 1, title: "Test 2", completed: true}
];

router.get('/', function(req, res, next){
    res.send(todos);
});

router.get('/:id', function(req, res, next){
    var todo = _.find(todos, todo => todo.id == req.params.id);
    if(todo === undefined){
        return res.status(404).send('Resource not found!');
    }
    res.status(200).send(todo);
});

router.post('/', function(req, res, next){
    console.log(req.body);
    if(!req.body.title || req.body.completed === undefined){
        return res.status(400).send("Bad request");
    }
    var maxId = -1;
    var todo = _.max(todos, todo => todo.id);
    if(todo){
        maxId = todo.id;
    }
    var newTodo = {
        id: maxId + 1,
        title: req.body.title,
        completed: req.body.completed
    }
    todos.push(newTodo);
    res.set('location', `http://localhost:3000/api/todos/${todo.id}`)
    res.status(201).send(newTodo);
});

router.put('/:id', function(req, res, next){
    var todo = _.find(todos, todo => todo.id == req.params.id);
    if(todo === undefined){
        return res.status(404).send('Resource not found!');
    }
    if(!req.body.title || !req.body.completed){
        return res.status(400).send("Bad request");
    }
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    res.status(200).send(todo);
});

router.delete('/:id', function(req, res, next){
    var todo = _.find(todos, todo => todo.id == req.params.id);
    if(todo === undefined){
        return res.status(204).send('No content');
    }
    todos = _.without(todos, todo);
    res.status(200).send(todo);
});

module.exports = router;
