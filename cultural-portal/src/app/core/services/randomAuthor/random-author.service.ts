import { Injectable } from '@angular/core';
import { AuthorsRoot, Authors } from 'src/app/authors/models/author.model';
import authorsFile from '../../../../assets/data/authors.json';
import { StateService } from 'src/app/shared/services/state.service';
import { Language } from '../../models/language.enum';
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

      this.lang = lang;
      this.randomAuthor();
    });
  }

  public randomAuthor(): void {
    let authorsList: Authors[];
 
    switch (this.lang) {
      case Language.ru: authorsList = this.authors.authorsRU; break;
      case Language.be: authorsList = this.authors.authorsBE; break;
      case Language.en: authorsList = this.authors.authorsEN; break;
      default: authorsList = this.authors.authorsRU;
    }
    this.dayAuthor.next(authorsList[Math.floor(Math.random() * authorsList.length)]);
  }
}
