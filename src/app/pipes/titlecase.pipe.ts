import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
    titlecased: string;

    transform(value: string) {
        if (!value) {
            return null;
        }

        let words = value.split(' ');

        for (let i = 0; i < words.length; i++) {
            if (this.isPreposition(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = this.titlecase(words[i]);
            }
        }
        words[0] = words[0][0].toUpperCase() + words[0].slice(1);

        return words.join(' ');
    }

    private titlecase(word:string){
        return word.substring(0, 1).toUpperCase() + word.slice(1);
    }
    private isPreposition(word: string): boolean {
        return ['THE', 'OF'].includes(word.toUpperCase());
    }
}