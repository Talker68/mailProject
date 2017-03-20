import { User } from './user/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(value: User[], filterString: string): any {
    return value.filter((user: User) => {
      return user.name.indexOf(filterString) !== -1 || user.email.indexOf(filterString) !== -1;
    });
  }

}
