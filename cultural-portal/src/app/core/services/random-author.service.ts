import { Injectable } from '@angular/core';
import { Authors } from 'src/app/authors/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class RandomAuthorService {

  // private min: number = 1;
  // private max: number = 8;
  // private authors: Authors[];

  constructor() { }

  // public randomAuthor(): Authors {
  //   return this.authors[Math.floor(Math.random() * (this.max - this.min)) + this.min]; 
  //   //Максимум не включается, минимум включается
  // }
}
