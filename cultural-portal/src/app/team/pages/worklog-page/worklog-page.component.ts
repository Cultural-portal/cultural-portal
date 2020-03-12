import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorklogService } from '../../services/worklog.service';
import { Observable, Subscription } from 'rxjs';
import { Worklog } from '../../models/worklog.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public data: Worklog;

  constructor(private worklog: WorklogService, private activateRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.subscription = this.activateRoute.data.subscribe((data) => {
      this.data = data.data;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
