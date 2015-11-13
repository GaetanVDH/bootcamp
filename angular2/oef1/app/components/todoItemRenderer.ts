import {Component, View, Input, NgClass, ViewEncapsulation} from 'angular2/angular2';
import { TodoModel } from '../services/todoService';

@Component({
   selector: 'todo-item-renderer',
})
@View({
    encapsulation: ViewEncapsulation.Native,
    directives: [NgClass],
    styles: [`
        .started {
            color: green;
        }
        .completed {
            text-decoration: line-through;
        }
    `],
    template: `
            <span [ng-class]="item.status">{{ item.status }}</span>
            {{ item.title }}
            <button (click)="item.onToggle()">Toggle</button>
    `
})

export class TodoItemRenderer {
    @Input()
    item: TodoModel;
}