import { Letter } from './letter/letter';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMail'
})
export class FilterMailPipe implements PipeTransform {

  transform(value: Letter[], filterString: string): any {
    return value.filter((letter: Letter) => {
      return letter.from.indexOf(filterString) !== -1 || letter.message.indexOf(filterString) !== -1;
    });
  }

}
