import { DeveloperActivity } from './developer-activity.model';
import { EvaluationScope } from './evaluation-scope.model';

export interface Worklog {
  worklogs: DeveloperActivity[];
  mainDifficulties: string[];
  evaluation: EvaluationScope[];
}

export interface WorklogResponse {
  RU: Worklog;
  EN: Worklog;
  BEL: Worklog;
}
