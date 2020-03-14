import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorklogService } from '../../services/worklog.service';
import { Observable, Subscription } from 'rxjs';
import { Worklog } from '../../models/worklog.model';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/shared/services/state.service';
import { skip, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public data: Worklog;

  constructor(
    private worklog: WorklogService,
    private activateRoute: ActivatedRoute,
    private stateService: StateService) { }

  public ngOnInit(): void {
    this.subscription = this.activateRoute.data.subscribe((data) => {
      this.data = data.data;
    });

    this.stateService.language$
      .pipe(
        skip(1),
        switchMap((lang) => this.worklog.getData())
      )
      .subscribe((data: Worklog) => {
        this.data = data;
      });

  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
