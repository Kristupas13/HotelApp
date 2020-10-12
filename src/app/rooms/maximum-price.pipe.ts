import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maximumPrice'
})
export class MaximumPricePipe implements PipeTransform {

  transform(value: [], price?: number): [] {

    if (value && price) {
      var transformedList: [] = [];
      value.forEach(cur => {
        if (5 <= price) {
          transformedList.push(cur);
        }
      })
      
      return transformedList;
    } else {
      return value;
    }
  }

}
