import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Authors } from '../../models/author.model';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { AuthorsService } from '../../services/authors.service';
import { Language } from 'src/app/core/models/language.enum';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
  @Input() public author: Authors;
  public language$: Observable<Language>;


  constructor(private router: Router, private stateService: StateService) { }

  public ngOnInit(): void {
    this.language$ = this.stateService.language$;

  }
  public onInfo(): void {
    this.router.navigate(['authors/info'],
                         { queryParams: { item: JSON.stringify(this.author) } });
  }

}
