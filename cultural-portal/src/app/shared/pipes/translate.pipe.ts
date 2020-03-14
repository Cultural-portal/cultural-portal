import { Pipe, PipeTransform } from '@angular/core';
import { Language } from 'src/app/core/models/language.enum';
import { StateService } from '../services/state.service';
import { Dictionary } from '../data/dictionary';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  public language: Language;
  constructor(private stateService: StateService) {

  }

  public transform(value: string, language?: Language): string {
    this.stateService.language$.subscribe((val: Language) => this.language = val);
    if (this.language === Language.en ) { return value; }
    return Dictionary[this.language][value];
  }

}
