import { Injectable } from "@angular/core";
import authorsList from "../../../assets/data/authors.json";
import { AuthorsRoot, Authors } from "../models/author.model.js";
import { Observable, of } from 'rxjs';
import { Language } from '../models/language.enum.js';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private authors: AuthorsRoot = <AuthorsRoot>authorsList;
  constructor() {}

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
}
