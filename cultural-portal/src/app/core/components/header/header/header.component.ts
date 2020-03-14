import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Language } from 'src/app/core/models/language.enum';
import { BehaviorSubject } from 'rxjs';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public language: Language = Language.ru;
  public listLng: string[] = Object.keys(Language);
  public language$: BehaviorSubject<Language> = this.stateService.language$;

  public showMobile: boolean;

  constructor(public breakpointObserver: BreakpointObserver,
              private stateService: StateService) { }

  public ngOnInit(): void {

    this.breakpointObserver
    .observe(['(min-width: 965px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showMobile = true;
      } else {
        this.showMobile = false;
      }
    });

    this.language$.subscribe(language => this.language = language);

  }

  public onChangLang(val: Language): void {

    this.stateService.language = val;
  }
}
