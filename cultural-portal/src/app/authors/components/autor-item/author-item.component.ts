import { Component, OnInit, Input } from '@angular/core';
import { Authors } from '../../models/author.model';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
  @Input() public author: Authors;

  constructor() { }

  public ngOnInit(): void {
  }

}
