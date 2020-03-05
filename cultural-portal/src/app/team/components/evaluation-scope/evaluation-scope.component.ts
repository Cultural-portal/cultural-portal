import { Component, OnInit, Input } from '@angular/core';
import { EvaluationScope } from '../../models/evaluation-scope.model';

@Component({
  selector: 'app-evaluation-scope',
  templateUrl: './evaluation-scope.component.html',
  styleUrls: ['./evaluation-scope.component.scss']
})
export class EvaluationScopeComponent implements OnInit {

  @Input() public scope: EvaluationScope;

  constructor() { }

  public ngOnInit(): void {
  }

}
