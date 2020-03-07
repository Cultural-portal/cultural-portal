import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language.enum';
import { Search } from '../../models/search.enum';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public language: Language = Language.ru;
  public listLng: string[] =  Object.keys(Language);
  public language$: BehaviorSubject<Language> = new BehaviorSubject(this.language);

  public search: Search = Search.name;
  public listSearch: string[] =  Object.keys(Search);
  public searchType$: BehaviorSubject<Search> = new BehaviorSubject(this.search);


  public controlSearchInput: FormControl = new FormControl('');

  public searchText: string = '';
  public searchText$: BehaviorSubject<string> = new BehaviorSubject(this.searchText);


  constructor(private authorsService: AuthorsService) { }

  public ngOnInit(): void {
    this.controlSearchInput.valueChanges.pipe(
      debounceTime(700),
    ).subscribe(
      textInput => {
        this.searchText = textInput;
        this.searchText$.next(textInput);
      }
    );
  }

  public onChangLang(val: Language): void {
    console.log('onChangLang', val);
    this.language$.next(val);
    this.authorsService.language = val;
  }

  public onChangeTypeSearch(val: Search): void {
    console.log('onChangeTypesearch', val);
    this.searchType$.next(val);
  }

}
