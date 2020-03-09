import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Authors } from '../../models/author.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit, OnDestroy {
  public author: Authors;
  public subscription: Subscription;
  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  public ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(value => {
        this.author = <Authors>JSON.parse(value.item);
        console.log(value.items);
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

  public getVideo(video: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video}`
    );
  }

  public full(): void {
    let elem: Element = document.querySelector('.video');
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.log(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

  public getMap(cord): SafeResourceUrl {
    const URL_API = 'https://api.opencagedata.com/';
    const KEY = '12ff4fe1ac804a4689043079fcfc5b48';
    const show = `${URL_API}geocode/v1/map?q=${cord}&key=${KEY}&pretty=1&no_annotations=1&abbrv=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(show);
  }
}
