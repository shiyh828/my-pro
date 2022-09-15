import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'booleansexpipe'
})

export class BooleanSexPipe implements PipeTransform {

    transform(value: boolean): string {
        
        return value?"男":"女";
    }
}