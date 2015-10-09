/**
 * Created by Gaetan on 09/10/15.
 */

var Todo = (function() {
    'use strict';

    class Todo {

        constructor(){
            //
            //this.todos = [];
            const storeKey = 'todos-jquery';
            this.todos = util.store(this.storeKey);
        }

        add(item){
            this.todos.push({
                id: util.uuid(),
                title: item,
                completed: false
            });
        }

        remove(index){
            this.todos.splice(index, 1);
        }

        get(index){
            return this.todos[index];
        }

        getList(filter){
            if (filter === 'active') {
                return this.getActiveTodos();
            }

            if (filter === 'completed') {
                return this.getCompletedTodos();
            }

            return this.todos;
        }

        getActiveTodos () {
            return this.todos.filter(function (todo) {
                return !todo.completed;
            });
        }

        getCompletedTodos () {
            return this.todos.filter(function (todo) {
                return todo.completed;
            });
        }
        //
        //function toggleAll(isChecked){
        //    todos.forEach(function (todo) {
        //        todo.completed = isChecked;
        //    });
        //}

        toggleAll(){
            this.todos.forEach(function (todo) {
                todo.completed = !todo.completed;
            });
        }

        removeCompleted(){
            this.todos = this.getActiveTodos();
        }

        store(data){
            util.store(this.storeKey, this.todos);
        }

        //return{
        //    //todos: todos,
        //    init: init,
        //    store: store,
        //    add: add,
        //    get: get,
        //    toggleAll: toggleAll,
        //    getList: getList,
        //    remove: remove,
        //    removeCompleted: removeCompleted
        //}

    }
    return Todo;
})();
