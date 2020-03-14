import { Component, OnInit } from '@angular/core';
import { RandomAuthorService } from 'src/app/core/services/random-author.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss']
})
export class AuthorOfDayComponent implements OnInit {

  private author: Object;
  private id: string;
  public authorName: string;
  public realName: string;
  public img: string;
  public birth: string;
  public death: string;
  public showMobile: boolean;

  constructor(private randomAuthorService: RandomAuthorService,
              public breakpointObserver: BreakpointObserver,
              private router: Router) {
  }

  public ngOnInit(): void {

    this.author = this.randomAuthorService.randomAuthor();
    // tslint:disable-next-line: no-string-literal
    this.authorName = this.author['authorName'];
    // tslint:disable-next-line: no-string-literal
    this.realName = this.author['realName'];
    // tslint:disable-next-line: no-string-literal
    this.img = this.author['img'];
    // tslint:disable-next-line: no-string-literal
    this.birth = this.author['birth'];
    // tslint:disable-next-line: no-string-literal
    this.death = this.author['death'];
    // tslint:disable-next-line: no-string-literal
    this.id = this.author['id'];
    this.breakpointObserver
      .observe(['(min-width: 720px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showMobile = true;
        } else {
          this.showMobile = false;
        }
      });
  }

  public navigateAuthor(): void {
    this.router.navigate(['authors/info'],
                         { queryParams: { item: this.id } });
  }
}
