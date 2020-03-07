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
    'enter text': 'введи текст' ,
    'More information': 'Больше информации'

  },
  be: {
    'Choose lang': 'Выбраць мову',
    'ru': 'ру',
    'en': 'англ',
    'be': 'бел',
    'Search': 'Пошук',
    'name': 'Iмя',
    'city': 'горад',
    'enter text': 'увядзi текст',
    'More information': 'Болей инфармацii'
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
