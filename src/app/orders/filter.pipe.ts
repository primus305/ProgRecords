import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, prop: string): any {
    if(value.length == 0) {
      return value;
    }
    const resultArray = [];
    for(const item of value) {
      if(item.value[prop] === filter) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
