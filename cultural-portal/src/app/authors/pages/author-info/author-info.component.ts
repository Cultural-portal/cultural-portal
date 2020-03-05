import { Component, OnInit, Input } from '@angular/core';
import { Authors, AuthorsRoot } from '../../models/author.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit {

  public authorsEN: Authors[];
  public authorsRU: Authors[];
  public authorsBE: Authors[];
  public author: Authors;
  public map: string;
  // @Input() author: Authors; // for list
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    let authors = this.getJsonAuthors();
    authors.subscribe((data: AuthorsRoot) => {
      this.authorsEN = data.authorsEN;
      this.authorsRU = data.authorsRU;
      this.authorsBE = data.authorsBE;
    });
  }

  public getJsonAuthors() {
    return this.http.get('/assets/data/authors.json');
  }

  public getVideo(n) {
    let response = this.http.get(n);
    response.subscribe( video => console.log(video));
  }

  public getMap(cord) {
    const URL_API = 'https://api.opencagedata.com/';
    const KEY = '12ff4fe1ac804a4689043079fcfc5b48';

    const url = `${URL_API}geocode/v1/map?q=${cord}&key=${KEY}&pretty=1&no_annotations=1&abbrv=1`;
    const response = this.http.get(url);
    response.subscribe((map: {url: string}) => this.map = map.url);
    return this.map;
  }
  // import { AuthorInfoComponent } from './authors/pages/author-info/author-info.component';
  // import { HttpClientModule } from '@angular/common/http';

}
