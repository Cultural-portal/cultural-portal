export interface DeveloperResponse {
  RU: Developer[];
  EN: Developer[];
  BEL: Developer[];
}

export interface Developer {
  name: string;
  github: string;
  img: string;
  role: string;
}
