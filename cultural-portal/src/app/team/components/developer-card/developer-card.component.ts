import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../../models/developer.model';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent implements OnInit {

  @Input() public developer: Developer;

  constructor() { }

  public ngOnInit(): void {
  }

}
