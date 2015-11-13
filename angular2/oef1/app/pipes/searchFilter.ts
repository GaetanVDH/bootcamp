import {Pipe} from 'angular2/angular2';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilter {
    transform(value, filter){
        return value.filter((item) => item.title.includes(filter));
    }
}