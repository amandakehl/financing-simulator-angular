import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(value: string): string {
    return '(' + value.substring(0, 1) + ')' + value.substring(2, 6) + '-' + value.substring(7, 10);
  }

}
