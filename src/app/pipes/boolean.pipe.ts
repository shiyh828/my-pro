import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'booleanpipe'
})

export class BooleanPipe implements PipeTransform {

    transform(value: boolean): string {
        
        return value?"是":"否";
    }


}