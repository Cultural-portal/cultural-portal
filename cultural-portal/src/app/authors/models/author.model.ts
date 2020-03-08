export interface AuthorsRoot {
  authorsEN: Authors[];
  authorsRU: Authors[];
  authorsBE: Authors[];
}

export interface Authors {
  id: number;
  name: string;
  surname: string;
  realName: string;
  realSurname: string;
  realPatronymic: string;
  birth: string;
  death: string;
  img: string;
  summaryBiography: string;
  biography: Biography[];
  works: string[];
  video: string;
  place: string;
}

export  interface Biography {
  title: string;
  content: string;
  year: string;
}
