import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Authors } from '../../models/author.model';
import { Router } from '@angular/router';
import { Language } from '../../models/language.enum';
import { Observable, of } from 'rxjs';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
  @Input() public author: Authors;
  public language$: Observable<Language>;


  constructor(private router: Router, private authorsService: AuthorsService) { }

  public ngOnInit(): void {
    this.language$ = this.authorsService.language$;

  }
  public onInfo(): void {
    this.router.navigate(['author-info'],
                         { queryParams: { item: JSON.stringify(this.author) } });
  }

}
