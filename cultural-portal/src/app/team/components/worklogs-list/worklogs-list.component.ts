import { Component, OnInit } from '@angular/core';
import { Activity, DeveloperActivity } from '../../models/developer-activity.model';

@Component({
  selector: 'app-worklogs-list',
  templateUrl: './worklogs-list.component.html',
  styleUrls: ['./worklogs-list.component.scss']
})
export class WorklogsListComponent implements OnInit {

  public dataSource: Activity[] = [
    {hours: 1, description: 'kjbkjkjbkjkj'},
    {hours: 1, description: 'Hydrogen'},
    {hours: 1, description: 'Hydrogen'},
    {hours: 1, description: 'Hydrogen'},
    {hours: 1, description: 'Hydrogen'},
    {hours: 1, description: 'Hydrogen'},
  ];

  public worklogs: DeveloperActivity[] =  [
    {
      name: 'ermak',
      activityList: this.dataSource
    },
    {
      name: 'ermak',
      activityList: this.dataSource
    },
    {
      name: 'ermak',
      activityList: this.dataSource
    },
    {
      name: 'ermak',
      activityList: this.dataSource
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
