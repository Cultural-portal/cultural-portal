import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from 'src/app/shared/services/state.service';
import { Main, MainResponse } from '../../models/main.enum';
import mainJson from '../../../../assets/data/main.json';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private lang: string;
  public main: Main = mainJson.ru;

  constructor(private http: HttpClient, private stateService: StateService) {
    this.lang = stateService.language;
    stateService.language$.subscribe((data) => {
      this.lang = data;
      this.getMain();
    });
    this.getMain();
  }

  private getMain(): void {
    this.http.get('../../../../assets/data/main.json').subscribe((response: MainResponse) => {
      this.main = response[this.lang];
    });
  }
}
