import { Injectable } from '@angular/core';
import { AuthorsRoot, Authors } from 'src/app/authors/models/author.model';
import authorsFile from '../../../assets/data/authors.json';
import { StateService } from 'src/app/shared/services/state.service';
import { Language } from '../models/language.enum';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomAuthorService {
  private authors: AuthorsRoot = <AuthorsRoot>authorsFile;
  private lang: string;
  public dayAuthor: Subject<Authors> = new Subject<Authors>();

  constructor(private stateService: StateService) {
    this.lang = Language.ru;
    this.randomAuthor();
    this.stateService.language$.subscribe(lang => {
      console.log(lang);
      this.lang = lang;
      this.randomAuthor();
    });
  }

  public randomAuthor(): void {
    let authorsList: Authors[];
    console.log(this.lang);
    switch (this.lang) {
      case Language.ru: authorsList = this.authors.authorsRU;
      case Language.be: authorsList = this.authors.authorsBE;
      case Language.en: authorsList = this.authors.authorsEN;
      default: authorsList = this.authors.authorsRU;
    }
    this.dayAuthor.next(authorsList[Math.floor(Math.random() * authorsList.length)]);
  }
}
