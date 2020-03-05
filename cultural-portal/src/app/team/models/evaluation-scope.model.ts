export interface EvaluationScope {
  scopeTitle: string;
  requirementsList: EvaluationrRequirement[];
}

export interface EvaluationrRequirement {
  isDone: boolean;
  description: string;
}
