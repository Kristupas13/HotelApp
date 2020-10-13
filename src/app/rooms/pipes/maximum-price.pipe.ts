import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../room';

@Pipe({
  name: 'maximumPrice'
})
export class MaximumPricePipe implements PipeTransform {

  transform(value: Room[], price?: number): Room[] {

    if (value && price) {
      var transformedList: Room[] = [];
      value.forEach(cur => {
        if (cur.fullPrice <= price) {
          transformedList.push(cur);
        }
      })
      
      return transformedList;
    } else {
      return value;
    }
  }

}
