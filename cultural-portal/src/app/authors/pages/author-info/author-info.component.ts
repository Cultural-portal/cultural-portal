import { Component, OnInit, Input } from '@angular/core';
import { Authors, AuthorsRoot } from '../../models/author.model';
import { HttpClient } from '@angular/common/http';
// import { SafeUrl } from "@angular/platform-browser";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit {
  // urlVideo: SafeUrl;
  url = "https://www.youtube.com/embed/";
  public author: Authors;
  public res;
  // @Input() author: Authors; // for list
  constructor( private sanitizer: DomSanitizer, private http: HttpClient ) { }

  ngOnInit(): void {
    let authors = this.getJsonAuthors();
    authors.subscribe((data: AuthorsRoot) => {
      this.author = data.authorsRU[0];
    });
  }

  public getJsonAuthors() {
    return this.http.get('/assets/data/authors.json');
  }

  public getVideo(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `${this.url}${video}`
    );
  }

  public getMap(cord) {
    const URL_API = 'https://api.opencagedata.com/';
    const KEY = '12ff4fe1ac804a4689043079fcfc5b48';
    const show = `https://api.opencagedata.com/geocode/v1/map?q=${cord}&key=12ff4fe1ac804a4689043079fcfc5b48&pretty=1&no_annotations=1&abbrv=1`
    // const url = `${URL_API}geocode/v1/map?q=${cord}&key=${KEY}&pretty=1&no_annotations=1&abbrv=1`;
    // let response = this.http.get(url);
    // response.subscribe((i: any) => console.log('-------------2:',i.url));
    console.log('show:',show);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      show
    );
  }

}
