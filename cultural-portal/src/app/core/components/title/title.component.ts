import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language.enum';
import { BehaviorSubject } from 'rxjs';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  public language: Language = Language.ru;
  public language$: BehaviorSubject<Language> = this.stateService.language$;

  constructor(private stateService: StateService) { }

  public ngOnInit(): void {
    this.language$.subscribe(language => this.language = language);
  }

}
