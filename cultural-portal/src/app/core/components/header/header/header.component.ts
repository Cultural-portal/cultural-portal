import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showMobile: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.breakpointObserver
    .observe(['(min-width: 650px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showMobile = true;
      } else {
        this.showMobile = false;
      }
    });

  }
}
