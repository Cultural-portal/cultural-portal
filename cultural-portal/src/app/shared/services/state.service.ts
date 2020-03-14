import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/core/models/language.enum';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public language$: BehaviorSubject<Language> = new BehaviorSubject(Language.ru);

  constructor() { }

  public set language(val: Language) {

    this.language$.next(val);
  }

}
