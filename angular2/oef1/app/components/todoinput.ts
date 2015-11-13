import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import { TodoService, TodoModel } from "../services/todoService";

@Component({
   selector: 'todo-input',
})
@View({
   directives: [FORM_DIRECTIVES],
   template: `
       <form (ng-submit)="onSubmit()">
           <input type="text" [(ng-model)]="todoModel.title">
       </form>
   `
})

export class  TodoInput {
    todoModel: TodoModel = new TodoModel();

    // Typescript style
    constructor(private todoService: TodoService){
        console.log(this.todoService);
    }

    onSubmit(){
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
        console.log(this.todoService.todos);
    }
}