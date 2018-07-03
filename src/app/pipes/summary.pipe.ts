import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, args?: any) {
        //falsy - empty, null etc
        if (!value) {
            return null;
        } else if (value.length > 50) {
            return value.substr(0, 50) + '...';
        } else {
            return value;
        }

    }
}