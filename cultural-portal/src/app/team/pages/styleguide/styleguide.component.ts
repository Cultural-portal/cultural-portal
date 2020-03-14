import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/models/language.enum';
import { BehaviorSubject } from 'rxjs';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  public language: Language = Language.ru;
  public language$: BehaviorSubject<Language> = this.stateService.language$;

  constructor(private stateService: StateService) { }

  public ngOnInit(): void {
    this.language$.subscribe(language => this.language = language);
  }

}
