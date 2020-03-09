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
    if ((!items) || (searchType === '')) {
      return null;
    }
    switch (searchType) {
      case Search.city:
        return items.filter(value => {
          const search: boolean = value.biography.some(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase()));
          return search;
        });

      case Search.name:
        return items.filter(value => {
          return (value.name + value.realName + value.surname + value.realSurname )
          .toLowerCase().includes(searchText.toLowerCase());
        });

      default:
        return items;
    }
  }
}
