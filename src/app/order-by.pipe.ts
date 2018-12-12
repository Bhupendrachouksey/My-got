import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): Array<string> {
array.sort((a: any,b: any) => {
    if(a.name<b.name){return -1}
    else if(a.name>b.name){return 1}
    else return 0;
});

    return array;
  }

}
