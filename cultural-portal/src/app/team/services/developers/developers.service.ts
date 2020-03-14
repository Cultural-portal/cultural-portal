import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Developer, DeveloperResponse } from '../../models/developer.model';
import { StateService } from 'src/app/shared/services/state.service';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  private lang: string;
  public developers: Developer[] = [];

  constructor(private http: HttpClient, private stateService: StateService) {
    this.lang = stateService.language;
    stateService.language$.subscribe((data) => {
      this.lang = data;
      this.getDevs();
    });
    this.getDevs();
  }

  private getDevs(): void {
    this.http.get('../../../assets/data/developers.json').subscribe((response: DeveloperResponse) => {
      this.developers = response[this.lang];
    });
  }
}
