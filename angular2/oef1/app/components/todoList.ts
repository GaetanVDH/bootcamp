import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import { TodoService } from '../services/todoService';
import { TodoItemRenderer } from '../components/todoItemRenderer';

import { SearchFilter } from '../pipes/searchFilter';
import { SearchInput } from '../components/searchInput';

@Component({
    selector: 'todo-list',
})
@View({
    directives: [NgFor, TodoItemRenderer, FORM_DIRECTIVES, SearchInput],
    pipes: [SearchFilter],
    template: `
        <search-input #search></search-input>
        <ul>
           <li *ng-for="#todo of todoService.todos | searchFilter:search.searchString">
                <todo-item-renderer [item]="todo"></todo-item-renderer>
           </li>
        </ul>
        <!--<select-letter #select></select-letter>-->
   `
})

export class TodoList {

    constructor(private todoService: TodoService){

    }
}