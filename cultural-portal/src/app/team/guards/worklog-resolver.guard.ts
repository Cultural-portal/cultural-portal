import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Worklog } from '../models/worklog.model';
import { WorklogService } from '../services/worklog.service';

@Injectable({
  providedIn: 'root'
})
export class WorklogResolverGuard implements Resolve<Worklog> {

  constructor(private response: WorklogService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Worklog>|Promise<Worklog>|Worklog {
    return this.response.getData();
  }
}
