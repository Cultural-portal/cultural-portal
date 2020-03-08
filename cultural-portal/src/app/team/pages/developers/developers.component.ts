import { Component, OnInit } from '@angular/core';
import { Developer } from '../../models/developer.model';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  public developers: Developer[] = [
    {
      name: 'Vladislav Drozd',
      github: 'https://github.com/VlaDrozd',
      img: 'https://avatars2.githubusercontent.com/u/25082511?s=460&v=4',
      role: 'developer'
    },
    {
      name: 'Timur Yermakou',
      github: 'https://github.com/errmakovv',
      img: 'https://avatars1.githubusercontent.com/u/47751940?s=460&v=4',
      role: 'developer'
    },
    {
      name: 'Ulyana Bychkovskaya',
      github: 'https://github.com/ulyana18',
      img: 'https://avatars3.githubusercontent.com/u/44649203?s=460&v=4',
      role: 'developer'
    },
    {
      name: 'Aliaksandr	Babtsou',
      github: 'https://github.com/babtsoualiaksandr',
      img: 'https://avatars3.githubusercontent.com/u/25074606?s=460&v=4',
      role: 'developer'
    },
    {
      name: 'Mikita	Maiseichyk',
      github: 'https://github.com/Vromga',
      img: 'https://avatars2.githubusercontent.com/u/48679402?s=460&v=4',
      role: 'developer'
    },
    {
      name: 'Uladzimir	Kazak',
      github: 'https://github.com/mrinex',
      img: 'https://avatars0.githubusercontent.com/u/35580404?s=460&v=4',
      role: 'developer'
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
