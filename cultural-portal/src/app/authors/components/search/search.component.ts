import { Component, OnInit } from '@angular/core';

import { Search } from '../../models/search.enum';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { AuthorsService } from '../../services/authors.service';
import { Language } from 'src/app/core/models/language.enum';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public language$: BehaviorSubject<Language> = this.stateService.language$;

  public search: Search = Search.name;
  public listSearch: string[] = Object.keys(Search);
  public searchType$: BehaviorSubject<Search> = new BehaviorSubject(
    this.search
  );

  public controlSearchInput: FormControl = new FormControl();

  public searchText: string = '';
  public searchText$: BehaviorSubject<string> = new BehaviorSubject(
    this.searchText
  );

  constructor(private authorsService: AuthorsService,
              private stateService: StateService) {}

  public ngOnInit(): void {
    this.controlSearchInput.valueChanges
      .pipe(debounceTime(700))
      .subscribe(textInput => {
        this.searchText = textInput;
        this.searchText$.next(textInput);
      });
  }

  public onChangeTypeSearch(val: Search): void {
    console.log('onChangeTypesearch', val);
    this.searchType$.next(val);
  }
}
