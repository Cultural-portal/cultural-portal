import { Component, OnInit } from '@angular/core';
import { EvaluationScope, EvaluationrRequirement } from '../../models/evaluation-scope.model';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent implements OnInit {

  public evaluationRequirementsList: EvaluationrRequirement[] = [
    {isDone: true, description: 'kdsnvfsdvnn,mfdv,nmf'},
    {isDone: true, description: 'kdsnvfsdvnn,mfdv,nmf'},
    {isDone: true, description: 'kdsnvfsdvnn,mfdv,nmf'},
    {isDone: true, description: 'kdsnvfsdvnn,mfdv,nmf'},
    {isDone: true, description: 'kdsnvfsdvnn,mfdv,nmf'},
  ];

  public evaluation: EvaluationScope[] = [
    {scopeTitle: 'Min', requirementsList: this.evaluationRequirementsList},
    {scopeTitle: 'Min', requirementsList: this.evaluationRequirementsList},
    {scopeTitle: 'Min', requirementsList: this.evaluationRequirementsList},
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
