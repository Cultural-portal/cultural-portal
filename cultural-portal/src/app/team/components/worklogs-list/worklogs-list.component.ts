import { Component, OnInit, Input } from '@angular/core';
import { Activity, DeveloperActivity } from '../../models/developer-activity.model';

@Component({
  selector: 'app-worklogs-list',
  templateUrl: './worklogs-list.component.html',
  styleUrls: ['./worklogs-list.component.scss']
})
export class WorklogsListComponent implements OnInit {

  @Input() public worklogs: DeveloperActivity[];
  @Input() public title: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
