import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './room';

@Pipe({
  name: 'minimumRate'
})
export class MinimumRatePipe implements PipeTransform {

  transform(value: Room[], rating?: number): Room[] {
    if (value && rating) {
      var transformedList: Room[] = [];

      value.forEach(cur => {
        if (cur.rating >= rating) {
          transformedList.push(cur);
        }
      })
  
      return transformedList;
    } else {
      return value;
    }
  }

}
