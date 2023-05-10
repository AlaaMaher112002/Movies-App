import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(trendingsItem:any[],term:string): any[] {
    return trendingsItem.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  }
}
