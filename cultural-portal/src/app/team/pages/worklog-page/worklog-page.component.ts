import { Component, OnInit } from '@angular/core';
import { WorklogService } from '../../services/worklog.service';
import { Observable } from 'rxjs';
import { Worklog } from '../../models/worklog.model';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit {

  public data: Observable<Worklog>;

  constructor(private worklog: WorklogService) { }

  public ngOnInit(): void {
    this.data = this.worklog.getData();
  }

}
