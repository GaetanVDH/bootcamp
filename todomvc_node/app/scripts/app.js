/*global jQuery, Handlebars, Router */
jQuery(function ($) {
	'use strict';

	Handlebars.registerHelper('eq', function (a, b, options) {
		return a === b ? options.fn(this) : options.inverse(this);
	});

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var App = {
		init: function () {
            // todoRepo.init();
			this.cacheElements();
			this.bindEvents();

			new Router({
				'/:filter': function (filter) {
					this.filter = filter;
					this.render();
				}.bind(this)
			}).init('/all');
		},
		cacheElements: function () {
			this.todoTemplate = Handlebars.compile($('#todo-template').html());
			this.footerTemplate = Handlebars.compile($('#footer-template').html());
			this.$todoApp = $('#todoapp');
			this.$header = this.$todoApp.find('#header');
			this.$main = this.$todoApp.find('#main');
			this.$footer = this.$todoApp.find('#footer');
			this.$newTodo = this.$header.find('#new-todo');
			this.$toggleAll = this.$main.find('#toggle-all');
			this.$todoList = this.$main.find('#todo-list');
			this.$count = this.$footer.find('#todo-count');
			this.$clearBtn = this.$footer.find('#clear-completed');
		},
		bindEvents: function () {
			var list = this.$todoList;
			this.$newTodo.on('keyup', this.create.bind(this));
			this.$toggleAll.on('change', this.toggleAll.bind(this));
			this.$footer.on('click', '#clear-completed', this.destroyCompleted.bind(this));
			list.on('change', '.toggle', this.toggle.bind(this));
			list.on('dblclick', 'label', this.edit.bind(this));
			list.on('keyup', '.edit', this.editKeyup.bind(this));
			list.on('focusout', '.edit', this.update.bind(this));
			list.on('click', '.destroy', this.destroy.bind(this));
		},
		render: function () {
            todoRepo.getList('', function(todos){
                this.$todoList.html(this.todoTemplate(todos));
                this.$main.toggle(todos.length > 0);
                var activeTodos = todoRepo.getList('active', function(activeTodos){
                    this.$toggleAll.prop('checked', activeTodos.length === 0);
                    this.renderFooter(todos, activeTodos);
                }.bind(this));
                this.$newTodo.focus();
                //todoRepo.store();
            }.bind(this));
		},
		renderFooter: function (todos, activeTodos) {
			var todoCount = todos.length;
			var activeTodoCount = activeTodos.length;
			var template = this.footerTemplate({
				activeTodoCount: activeTodoCount,
				activeTodoWord: util.pluralize(activeTodoCount, 'item'),
				completedTodos: todoCount - activeTodoCount,
				filter: this.filter
			});

			this.$footer.toggle(todoCount > 0).html(template);
		},
		toggleAll: function (e) {

            todoRepo.toggleAll(function(){
                this.render();
            }.bind(this));
		},
		// getFilteredTodos: function () {
  //           return todoRepo.getList(this.filter);
		// },
		destroyCompleted: function () {
            todoRepo.removeCompleted(function(){
                this.filter = 'all';
                this.render();
            }.bind(this));
		},
		// accepts an element from inside the `.item` div and
		// returns the corresponding index in the `todos` array
		indexFromEl: function (el) {
			var id = $(el).closest('li').data('id');
			todoRepo.getList('', function(todos){
                var i = todos.length;

                while (i--) {
                    if (todos[i].id === id) {
                        return i;
                    }
                }
            });
		},
        getIdFromEl: function (el) {
            return $(el).closest('li').data('id');
        },
		create: function (e) {
			var $input = $(e.target);
			var val = $input.val().trim();

			if (e.which !== ENTER_KEY || !val) {
				return;
			}

            todoRepo.add(val, function(){
                $input.val('');
                this.render();
            }.bind(this));
		},
		toggle: function (e) {
			var id = this.getIdFromEl(e.target);
            todoRepo.get(id, function(todo){
                todo.completed = !todo.completed;
                todoRepo.update(todo, function(){
                    this.render();
                }.bind(this));
            }.bind(this));
		},
		edit: function (e) {
			var $input = $(e.target).closest('li').addClass('editing').find('.edit');
			$input.val($input.val()).focus();
		},
		editKeyup: function (e) {
			if (e.which === ENTER_KEY) {
				e.target.blur();
			}

			if (e.which === ESCAPE_KEY) {
				$(e.target).data('abort', true).blur();
			}
		},
		update: function (e) {
			var el = e.target;
			var $el = $(el);
			var val = $el.val().trim();

			if ($el.data('abort')) {
				$el.data('abort', false);
				this.render();
				return;
			}

			var i = this.indexFromEl(el);

			if (val) {
                todoRepo.get(i).title = val;
			} else {
                todoRepo.getList().splice(i, 1);
			}

			this.render();
		},
		destroy: function (e) {
            var id = this.getIdFromEl(e.target);
			todoRepo.remove(id, function(){
                this.render();
            }.bind(this));
		}
	};

	App.init();
});
