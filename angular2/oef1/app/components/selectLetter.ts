import {Component, View, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';

@Component({
   selector: 'select-letter',
})
@View({
   directives: [FORM_DIRECTIVES, NgFor],
   template: `
       <select [(ng-model)]="selectedLetter">
            <option *ng-for="#letter of letters">{{letter}}</option>
       </select>
   `
})

export class SelectLetter {
    letters: string[];
    selectedLetter: string;

    constructor(){
        this.letters = ['s', 'e', 'c'];
        this.selectedLetter = 'e';
    }
}