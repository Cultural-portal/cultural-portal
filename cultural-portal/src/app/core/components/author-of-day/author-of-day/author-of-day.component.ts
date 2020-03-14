import { Component, OnInit, Input } from '@angular/core';
import { RandomAuthorService } from 'src/app/core/services/randomAuthor/random-author.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Authors } from 'src/app/authors/models/author.model';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss']
})
export class AuthorOfDayComponent implements OnInit {

  private id: number;
  public authorName: string;
  public realName: string;
  public img: string;
  public birth: string;
  public death: string;
  public showMobile: boolean;

  @Input() public title: string;
  @Input() public job: string;
  @Input() public name: string;
  @Input() public birthDate: string;
  @Input() public deathDate: string;
  @Input() public moreBtn: string;

  constructor(private randomAuthorService: RandomAuthorService,
              public breakpointObserver: BreakpointObserver,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.randomAuthorService.dayAuthor.subscribe(author => {
      this.authorName = author.name + ' ' + author.surname;
      this.realName = author.realName;
      this.img = author.img;
      this.birth = author.birth;
      this.death = author.death;
      this.id = author.id;
    });
    this.randomAuthorService.randomAuthor();

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
