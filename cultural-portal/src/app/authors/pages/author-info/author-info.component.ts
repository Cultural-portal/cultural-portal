import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit {
  
  // @Input() author: Authors; // for list
  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  public getVideo(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video}`
    );
  }

  public full() {
    let elem = document.querySelector('.video');
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  public getMap(cord) {
    const URL_API = 'https://api.opencagedata.com/';
    const KEY = '12ff4fe1ac804a4689043079fcfc5b48';
    const show = `${URL_API}geocode/v1/map?q=${cord}&key=${KEY}&pretty=1&no_annotations=1&abbrv=1`
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      show
    );
  }

}
