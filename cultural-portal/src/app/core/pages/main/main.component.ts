import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/shared/services/state.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { skip, switchMap } from 'rxjs/operators';
import { Main, MainResponse } from '../../models/main.enum';
import { MainService } from '../../services/main/main.service';
import { Worklog } from 'src/app/team/models/worklog.model';
import { WorklogService } from 'src/app/team/services/worklog.service';
import { Language } from '../../models/language.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public language: Language = Language.ru;
  public language$: BehaviorSubject<Language> = this.stateService.language$;

  constructor(public mainService: MainService,
    private stateService: StateService) { }

  public ngOnInit(): void {
    this.language$.subscribe(language => this.language = language);
  }
}
