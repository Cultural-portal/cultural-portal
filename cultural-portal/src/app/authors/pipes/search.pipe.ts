import { Pipe, PipeTransform } from '@angular/core';
import { Authors } from '../models/author.model';
import { Search } from '../models/search.enum';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(
    items: Authors[],
    searchText: string,
    searchType: string
  ): Authors[] {
    if (!items) {
      return null;
    }
    console.log(searchText, searchType);
    switch (searchType) {
      case Search.city:
        return items.filter(value => {
          return value.place.toLowerCase().includes(searchText.toLowerCase());
        });
      case Search.name:
        return items.filter(value => {
          return value.name.toLowerCase().includes(searchText.toLowerCase());
        });

      default:
        return items;
    }
  }
}
