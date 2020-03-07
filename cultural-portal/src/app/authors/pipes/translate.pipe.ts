import { Pipe, PipeTransform } from '@angular/core';
import { Language } from '../models/language.enum';

export const Dictionary = {
  ru: {
    'Choose lang': 'Выбрать язык',
    'ru': 'руc',
    'en': 'англ',
    'be': 'бел',
    'Search': 'Поиск',
    'name': 'Имя',
    'city': 'город',
    'all': 'без фильтра',
    'enter text': 'введи текст' ,
    'More information': 'Больше информации'

  },
  be: {
    'Choose lang': 'выбраць мову',
    'ru': 'руc',
    'en': 'англ',
    'be': 'бел',
    'all': 'без фільтра',
    'Search': 'Пошук',
    'name': 'Iмя',
    'city': 'горад',
    'enter text': 'увядзi тэкст',
    'More information': 'Больш інфармацыі'
  },
 };

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  public transform(value: string, language: Language): string {
    if (language === Language.en ) { return value; }
    return Dictionary[language][value];
  }

}
