import { Component, OnInit, Input } from '@angular/core';
import { DeveloperActivity } from '../../models/developer-activity.model';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {

  @Input() public worklog: DeveloperActivity;
  public displayedColumns: string[] = ['hours', 'description'];

  constructor() { }

  public ngOnInit(): void {
  }

}
