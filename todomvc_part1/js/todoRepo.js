/**
 * Created by Gaetan on 09/10/15.
 */

var todoRepo = (function(){
    'use strict';
    var todos = [];
    const storeKey = 'todos-jquery';

    function init(){
        todos = util.store(storeKey);
    }

    function add(item){
        todos.push({
            id: util.uuid(),
            title: item,
            completed: false
        });
    }

    function remove(index){
        todos.splice(index, 1);
    }

    function get(index){
        return todos[index];
    }

    function getList(filter){
        if (filter === 'active') {
            return getActiveTodos();
        }

        if (filter === 'completed') {
            return getCompletedTodos();
        }

        return todos;
    }

    function getActiveTodos () {
        return todos.filter(function (todo) {
            return !todo.completed;
        });
    }

    function getCompletedTodos () {
        return todos.filter(function (todo) {
            return todo.completed;
        });
    }
    //
    //function toggleAll(isChecked){
    //    todos.forEach(function (todo) {
    //        todo.completed = isChecked;
    //    });
    //}

    function toggleAll(){
        todos.forEach(function (todo) {
            todo.completed = !todo.completed;
        });
    }

    function removeCompleted(){
        todos = getActiveTodos();
    }

    function store(data){
        util.store(storeKey, todos);
    }

    return{
        //todos: todos,
        init: init,
        store: store,
        add: add,
        get: get,
        toggleAll: toggleAll,
        getList: getList,
        remove: remove,
        removeCompleted: removeCompleted
    }
})();