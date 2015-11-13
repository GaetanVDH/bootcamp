import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
   selector: 'search-input',
})
@View({
   directives: [FORM_DIRECTIVES],
   template: `
       <label>Search: </label>
       <input [(ng-model)]="searchString" type="text"/>
   `
})

export class SearchInput {
    searchString: string;

    constructor() {
        this.searchString = '';
    }
}