import { Injectable } from '@angular/core';
import authorsList from '../../../assets/data/authors.json';
import { AuthorsRoot, Authors } from '../models/author.model.js';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/core/models/language.enum.js';
import { StateService } from 'src/app/shared/services/state.service.js';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private authors: AuthorsRoot = <AuthorsRoot>authorsList;

  constructor(private stateService: StateService) {}

  public getAuthors(ln: Language = Language.ru): Observable<Authors[]> {
    switch (ln) {
      case Language.ru:
        return of(this.authors.authorsRU);
      case Language.be:
        return of(this.authors.authorsBE);
      default:
        return of(this.authors.authorsEN);
    }
  }

  public getAuthor(id: number, ln: Language = Language.ru): Observable<Authors> {
    switch (ln) {
      case Language.ru:
        return of(this.authors.authorsRU.find(val => val.id === id));
      case Language.be:
        return of(this.authors.authorsBE.find(val => val.id === id));
      default:
        return of(this.authors.authorsEN.find(val => val.id === id));
    }
  }


}
