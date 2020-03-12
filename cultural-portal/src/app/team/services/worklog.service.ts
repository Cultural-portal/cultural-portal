import { Injectable, OnDestroy } from '@angular/core';
import { EvaluationScope } from '../models/evaluation-scope.model';
import { HttpClient } from '@angular/common/http';
import { WorklogResponse, Worklog } from '../models/worklog.model';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { StateService } from 'src/app/shared/services/state.service';

@Injectable({
  providedIn: 'root'
})
export class WorklogService implements OnDestroy {
  private subscription: Subscription;
  private lang: string;

  constructor(
    private http: HttpClient,
    private stateService: StateService
    ) {
      this.subscription = stateService.language$.subscribe((data) => {
        this.lang = data;
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getData(): Observable<Worklog> {
    return this.http.get<WorklogResponse>('../../../assets/data/worklog.json')
      .pipe(
        pluck(this.lang)
      );
  }
}
