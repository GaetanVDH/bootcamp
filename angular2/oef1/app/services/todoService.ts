import {Type} from 'angular2/angular2'

export class TodoModel {
    status: string = 'started';
    constructor(public title: string = ''){

    }

    onToggle(){
        if(this.status == 'started'){
            this.status = 'completed';
        }
        else{
            this.status = 'started';
        }
    }
}

export class TodoService extends Type {
    todos: TodoModel[];

    constructor(){
        super();
        this.todos = [
            new TodoModel('sleep'),
            new TodoModel('eat'),
            new TodoModel('code')
        ]
    }

    addTodo(value: TodoModel) : void{
        this.todos.push(value);
    }
}