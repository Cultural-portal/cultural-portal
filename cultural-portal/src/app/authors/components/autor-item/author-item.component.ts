import { Component, OnInit, Input } from '@angular/core';
import { Authors } from '../../models/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
  @Input() public author: Authors;

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public onInfo(): void {
    this.router.navigate(['author-info'],
                         { queryParams: { item: JSON.stringify(this.author) } });
  }

}
