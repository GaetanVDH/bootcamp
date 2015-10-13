/**
 * Created by Gaetan on 09/10/15.
 */

var todoRepo = (function(){
    'use strict';
    // var todos = [];
    // const storeKey = 'todos-jquery';

    // function init(){
    //     todos = util.store(storeKey);
    // }

    function add(title, callback){
        // todos.push({
        //     id: util.uuid(),
        //     title: title,
        //     completed: false
        // });
        $.ajax({
            url: 'http://localhost:3000/api/todos',
            type: 'POST',
            data: JSON.stringify({
                title: title,
                completed: false
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function(result) {
                callback();
            }
        });
    }

    function remove(id, callback){
        // todos.splice(index, 1);
        $.ajax({
            url: 'http://localhost:3000/api/todos/' + id,
            type: 'DELETE',
            success: function(result) {
                callback();
            }
        });
    }

    function get(id, callback){
        // return todos[index];
        $.get('http://localhost:3000/api/todos/' + id, function(todo){
            callback(todo);
        });
    }

    function getList(filter, callback){
        // if (filter === 'active') {
        //     return getActiveTodos();
        // }

        // if (filter === 'completed') {
        //     return getCompletedTodos();
        // }

        $.get('http://localhost:3000/api/todos', function(data){
            if(filter === 'active'){
                data = getActiveTodos(data);
            }
            if(filter === 'completed'){
                data = getCompletedTodos(data);
            }
            callback(data);
        });

        // return todos;
    }

    function getActiveTodos (data) {
        return data.filter(function (todo) {
            return !todo.completed;
        });
    }

    function getCompletedTodos (data) {
        return data.filter(function (todo) {
            return todo.completed;
        });
    }
    //
    //function toggleAll(isChecked){
    //    todos.forEach(function (todo) {
    //        todo.completed = isChecked;
    //    });
    //}

    function toggleAll(callback){
        $.ajax({
            url: 'http://localhost:3000/api/todos/toggleall',
            type: 'PUT',
            success: function(result) {
                callback();
            }
        });
    }

    function removeCompleted(callback){
        this.getList('completed', function(data){
            _.each(data, function(todo){
                this.remove(todo.id, function(){
                    callback();
                });
            }.bind(this));
        }.bind(this));
    }

    // function store(data){
    //     util.store(storeKey, todos);
    // }

    function update(todo, callback){
        console.log(todo.id);
        $.ajax({
            url: 'http://localhost:3000/api/todos/' + todo.id,
            type: 'PUT',
            data: JSON.stringify({
                id: todo.id,
                title: todo.title,
                completed: todo.completed
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function(result) {
                callback();
            }
        });
    }

    return{
        //todos: todos,
        //init: init,
        //store: store,
        add: add,
        get: get,
        toggleAll: toggleAll,
        getList: getList,
        remove: remove,
        removeCompleted: removeCompleted,
        update: update
    }
})();
