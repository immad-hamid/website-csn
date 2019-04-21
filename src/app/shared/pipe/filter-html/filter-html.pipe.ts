import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHtml'
})
export class FilterHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const n = value.indexOf('data-f-id');
    const result = n === -1 ? value : value.substring(0, n - 3);
    return result;
  }

}
