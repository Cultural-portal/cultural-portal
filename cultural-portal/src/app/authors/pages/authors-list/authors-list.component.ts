import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Observable } from 'rxjs';
import { Authors } from '../../models/author.model';

import { SearchComponent } from '../../components/search/search.component';
import { Search } from '../../models/search.enum';
import { Language } from 'src/app/core/models/language.enum';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  public authors: Observable<Authors[]>;
  @ViewChild(SearchComponent, { static: true })
  public searchComponent: SearchComponent;
  public language$: Observable<Language>;
  public searchType$: Observable<Search>;
  public searchText$: Observable<string>;

  constructor(private authorsService: AuthorsService) {}

  public ngOnInit(): void {
    this.language$ = this.searchComponent.language$;
    this.searchType$ = this.searchComponent.searchType$;
    this.searchText$ = this.searchComponent.searchText$;
    this.language$.subscribe(val => {
      this.authors = this.authorsService.getAuthors(val);
    });

    this.authorsService.getAuthors(Language.ru);
  }
}
