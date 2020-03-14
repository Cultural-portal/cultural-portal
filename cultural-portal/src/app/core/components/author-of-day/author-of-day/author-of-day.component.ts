import {Component, OnInit} from '@angular/core';
import {RandomAuthorService} from 'src/app/core/services/random-author.service';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Router} from "@angular/router";

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss']
})
export class AuthorOfDayComponent implements OnInit {

  public authorName: string;
  public realName: string;
  public img: string;
  public birth: string;
  public death: string;
  public showMobile: boolean;
  private author: Object;
  private id: string;

  constructor(private randomAuthorService: RandomAuthorService,
              public breakpointObserver: BreakpointObserver,
              private router: Router) {
  }

  ngOnInit(): void {

    this.author = this.randomAuthorService.randomAuthor();
    this.authorName = this.author['authorName'];
    this.realName = this.author['realName'];
    this.img = this.author['img'];
    this.birth = this.author['birth'];
    this.death = this.author['death'];
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
      {queryParams: {item: this.id}});
  }
}
