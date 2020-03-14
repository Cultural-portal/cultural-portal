import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../../services/developers/developers.service';
import { Language } from 'src/app/core/models/language.enum';
import { BehaviorSubject } from 'rxjs';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  public language: Language = Language.ru;
  public language$: BehaviorSubject<Language> = this.stateService.language$;

  constructor(public developersService: DevelopersService,
              private stateService: StateService) { }

  public ngOnInit(): void {
    this.language$.subscribe(language => this.language = language);

  }

}
