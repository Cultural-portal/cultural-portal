import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/models/language.enum';
import { BehaviorSubject } from 'rxjs';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public language: Language = Language.ru;
  public language$: BehaviorSubject<Language> = this.stateService.language$;

  constructor(private stateService: StateService) { }

  public ngOnInit(): void {
    this.language$.subscribe(language => this.language = language);
  }

}
