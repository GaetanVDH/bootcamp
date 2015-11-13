import {Pipe} from 'angular2/angular2';
import {PipeFactory} from "../../node_modules/angular2/ts/src/core/metadata";

@Pipe({
    name: 'startsWith',
    pure: false
})
export class StartsWith {
    transform(value, [propertyName, filter]){
        return value.filter((item) => item[propertyName].startsWith(filter));
    }
}