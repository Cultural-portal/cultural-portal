import {Component} from '@angular/core';

interface IBiography {
  title: string;
  content: string;
  year: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  public biographyArr: IBiography[];

  constructor() {
  }

}
