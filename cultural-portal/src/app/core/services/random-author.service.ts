import { Injectable } from '@angular/core';
import { Authors } from 'src/app/authors/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class RandomAuthorService {

  private authors: Authors[];
  private min: number = 0;
  private max: number = this.authors.length;

  constructor() { }

  public randomAuthor(): Authors {
    return this.authors[Math.floor(Math.random() * (this.max - this.min)) + this.min]; 
    //Максимум не включается, минимум включается
  }
}
