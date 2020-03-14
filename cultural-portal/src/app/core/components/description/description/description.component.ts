import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public showMobile: boolean;
  @Input() public title: string;
  @Input() public introduction: string;
  @Input() public aboutLiterature: string;
  @Input() public aboutPortal: string;

  constructor(public breakpointObserver: BreakpointObserver) { }

  public ngOnInit(): void {

    this.breakpointObserver
    .observe(['(min-width: 850px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showMobile = true;
      } else {
        this.showMobile = false;
      }
    });
  }

}
