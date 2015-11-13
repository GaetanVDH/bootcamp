import 'angular2/node_modules/zone.js';
import 'angular2/node_modules/reflect-metadata';
import { bootstrap, Component, View } from 'angular2/angular2';

import { TodoInput } from './components/todoinput';
import { TodoList } from './components/todoList';
import { TodoService } from './services/todoService';

@Component({
	selector: 'app'
})
@View({
    directives: [TodoInput, TodoList],
	template: `
		<div>{{message}}</div>
		<todo-input></todo-input>
		<todo-list></todo-list>
	`
})
export class App{
	//class properties
	message:String;
	
	constructor(){
		this.message = 'Hello world!';	
	}	
}

bootstrap(App, [TodoService]);