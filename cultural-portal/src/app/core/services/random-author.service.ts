import { Injectable } from '@angular/core';
import { AuthorsRoot, Authors } from 'src/app/authors/models/author.model';
import authorsList from '../../../assets/data/authors.json';

@Injectable({
  providedIn: 'root'
})
export class RandomAuthorService {

  private min: number;
  private max: number;
  private authors: AuthorsRoot = <AuthorsRoot>authorsList;
  public authorOfDay: Authors;

  constructor() { }

  public randomAuthor(): Object {
    this.min = 0;
    this.max = this.authors.authorsEN.length;
    this.authorOfDay = this.authors.authorsEN[Math.floor(Math.random() * (this.max - this.min)) + this.min];

    return {
      'authorName': `${this.authorOfDay.name} ${this.authorOfDay.surname}`,
      'realName': `${this.authorOfDay.realSurname}
       ${this.authorOfDay.realName} ${this.authorOfDay.realPatronymic}`,
      'img': this.authorOfDay.img,
      'birth': this.authorOfDay.birth,
      'death': this.authorOfDay.death,
      'id': this.authorOfDay.id
    };
  }
}
