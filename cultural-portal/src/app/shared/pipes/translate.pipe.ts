import { Pipe, PipeTransform } from '@angular/core';
import { Language } from 'src/app/core/models/language.enum';
import { StateService } from '../services/state.service';
import { Observable } from 'rxjs';


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
    'More information': 'Больше информации',
    'List of Authors': 'Список авторов',
    'Team members': 'Наша команда',
    'Worklog': 'Журнал работы',
    'Styleguide': 'Инструкция по стилю',
    'About' : 'О программе',
    'Created by ': 'Сделано',
    'GROUP-3 ': 'Крутая группа №3',
    "Angular Course 2020 ": 'Ангуляр курсы 2020',
    'Poets Of Belarus': 'Поэты Беларуси'

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
    'More information': 'Больш інфармацыі',
    'List of Authors': 'Спiс автарау',
    'Team members': 'Удзельнікі каманды',
    'Worklog': 'Часопіс працы',
    'Styleguide': 'Інструкцыя па стылі',
    'About' : 'Пра праграму',
    'Created by ': "Створана ",
    'GROUP-3 ': ' Група-3 ',
    "Angular Course 2020": 'Вуглавы курс 2020',
    'Poets Of Belarus' : 'Паэты Беларусі'
  },
 };

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
 private language$: Observable<Language> = this.stateService.language$;
 private language: Language;
 constructor(private stateService: StateService) {

 }
  public transform(value: string, language?: Language): string {
    this.language$.subscribe(lang => this.language = lang);
    if (this.language === Language.en ) { return value; }
    return Dictionary[this.language][value];
  }

}
