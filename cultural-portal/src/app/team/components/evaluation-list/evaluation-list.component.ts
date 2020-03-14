import { Component, OnInit, Input } from '@angular/core';
import { EvaluationScope, EvaluationrRequirement } from '../../models/evaluation-scope.model';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent implements OnInit {

  @Input() public evaluation: EvaluationScope[];
  @Input() public title: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
