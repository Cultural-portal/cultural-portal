import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-difficulties',
  templateUrl: './main-difficulties.component.html',
  styleUrls: ['./main-difficulties.component.scss']
})
export class MainDifficultiesComponent implements OnInit {

  @Input() public mainDifficulties: string[];
  @Input() public title: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
