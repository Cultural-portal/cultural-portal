import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language.enum';
import { Search } from '../../models/search.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public language: Language = Language.ru;
  public listLng: string[] =  Object.keys(Language);

  public search: Search = Search.name;
  public listSearch: string[] =  Object.keys(Search);
  constructor() { }

  public ngOnInit(): void {
  }

  public onChangLang(lang: string): void {
    console.log('changeLang', lang);
  }

}
