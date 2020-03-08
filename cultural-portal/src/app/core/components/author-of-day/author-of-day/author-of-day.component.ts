import { Component, OnInit } from '@angular/core';
import { RandomAuthorService } from 'src/app/core/services/random-author.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss']
})
export class AuthorOfDayComponent implements OnInit {

  private author: Object;
  public authorName: string;
  public realName: string;
  public img: string;
  public birth: string;
  public death: string;

  public showMobile: boolean;

  constructor(private randomAuthorService: RandomAuthorService, public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

    this.author = this.randomAuthorService.randomAuthor();
    this.authorName = this.author['authorName'];
    this.realName = this.author['realName'];
    this.img = this.author['img'];
    this.birth = this.author['birth'];
    this.death = this.author['death'];

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
}
