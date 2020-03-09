import { Injectable } from '@angular/core';
import { EvaluationScope } from '../models/evaluation-scope.model';
import { HttpClient } from '@angular/common/http';
import { WorklogResponse, Worklog } from '../models/worklog.model';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {
  private lang: string = 'RU'; // временно, пока нет общего сервиса под локализацию.
  public worklog: Worklog;

  constructor(private http: HttpClient) {
  }

  public getData(): Observable<Worklog> {
    return this.http.get<WorklogResponse>('../../../assets/data/worklog.json')
      .pipe(
        pluck(this.lang)
      );
  }
}
