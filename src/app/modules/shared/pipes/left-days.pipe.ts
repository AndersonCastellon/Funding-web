import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'leftDays',
})
export class LeftDaysPipe implements PipeTransform {
  private now = moment().format();
  private text: string;
  transform(value: number): string {
    const finish = moment(value);
    const diff = finish.diff(this.now, 'days');

    if (diff > 0) {
      this.text = `Faltan ${diff} días`;
    } else {
      this.text = `Terminó hace ${diff * -1} días`;
    }
    return this.text;
  }
}
