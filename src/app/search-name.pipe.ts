import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(trendingsItem:any[],term:string): any[] {
    return trendingsItem.filter((item)=>item.name.toLowerCase().includes(term.toLowerCase()));
  }

}
