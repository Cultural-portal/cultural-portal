export interface Author {
  name: string;
  birth: Date;
  death?: Date;
  img: string;
  biography: Biography[];
  works: string[];
  video?: string;
  place?: string;
}

export interface Biography {
  startDate: Date;
  endDate?: Date;
  title: string;
  text: string;
}
