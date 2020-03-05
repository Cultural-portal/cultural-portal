import { Component, OnInit } from '@angular/core';
import { Developer } from '../../models/developer.model';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  public developers: Developer[] = [{
    name: 'Vladislav Drozd',
    github: 'https://github.com/VlaDrozd',
    img: 'https://avatars2.githubusercontent.com/u/25082511?s=460&v=4',
    role: 'developer'
  },
  {
    name: 'Vladislav Drozd',
    github: 'https://github.com/VlaDrozd',
    img: 'https://avatars2.githubusercontent.com/u/25082511?s=460&v=4',
    role: 'developer'
  },
  {
    name: 'Vladislav Drozd',
    github: 'https://github.com/VlaDrozd',
    img: 'https://avatars2.githubusercontent.com/u/25082511?s=460&v=4',
    role: 'developer'
  },
  {
    name: 'Vladislav Drozd',
    github: 'https://github.com/VlaDrozd',
    img: 'https://avatars2.githubusercontent.com/u/25082511?s=460&v=4',
    role: 'developer'
  },
  {
    name: 'Vladislav Drozd',
    github: 'https://github.com/VlaDrozd',
    img: 'https://avatars2.githubusercontent.com/u/25082511?s=460&v=4',
    role: 'developer'
  }];

  constructor() { }

  public ngOnInit(): void {
  }

}
