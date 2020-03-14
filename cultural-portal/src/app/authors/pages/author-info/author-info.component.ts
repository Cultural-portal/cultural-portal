import { Component, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { AuthorsService } from '../../services/authors.service';
import { StateService } from '../../../shared/services/state.service';
import { Language } from '../../../core/models/language.enum';
import { Authors } from '../../models/author.model';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit, OnDestroy {
  public author$: Observable<Authors>;
  public subscription: Subscription;
  public langSubscription: Subscription;
  public language$: BehaviorSubject<Language> = this.stateService.language$;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    public router: Router,
    public authorService: AuthorsService,
    private stateService: StateService
  ) { }

  public ngOnInit(): void {
    this.langSubscription = this.language$.subscribe(value => {
      this.subscription = this.route.queryParams.subscribe(id => {
        this.author$ = this.authorService.getAuthor(+id.item, value);
      });
    });

  }

  public ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
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

  public getMap(cord: string): SafeResourceUrl {
    // tslint:disable-next-line: typedef
    const URL_API = 'https://api.opencagedata.com/';
    // tslint:disable-next-line: typedef
    const KEY = '12ff4fe1ac804a4689043079fcfc5b48';
    // tslint:disable-next-line: typedef
    const show = `${URL_API}geocode/v1/map?q=${cord}&key=${KEY}&pretty=1&no_annotations=1&abbrv=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(show);
  }
}
