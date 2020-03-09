import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Developer, DeveloperResponse } from '../../models/developer.model';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  private lang: string = 'EN'; // временно, пока нет общего сервиса под локализацию.
  public developers: Developer[] = [];

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/data/developers.json').subscribe((response: DeveloperResponse) => {
      this.developers = response[this.lang];
    });
  }
}
