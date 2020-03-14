import { Directive, Input, ElementRef,
  Renderer2, SimpleChanges, HostListener,
  OnChanges } from '@angular/core';

@Directive({
  selector: '[appElevation]'
})
export class ElevationDirective implements OnChanges {
  @Input()
  public defaultElevation: number = 0;

  @Input()
  public raisedElevation: number = 10;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.setElevation(this.defaultElevation);
  }

  public ngOnChanges(_changes: SimpleChanges): void {
    this.setElevation(this.defaultElevation);
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.setElevation(this.raisedElevation);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.setElevation(this.defaultElevation);
  }

  public setElevation(amount: number): void {
    // remove all elevation classes
    const classesToRemove: string[] = Array.from((<HTMLElement>this.element.nativeElement)
    .classList).filter(c => c.startsWith('mat-elevation-z'));
    classesToRemove.forEach((c) => {
      this.renderer.removeClass(this.element.nativeElement, c);
    });

    // add the given elevation class

    // tslint:disable-next-line: typedef
    const newClass = `mat-elevation-z${amount}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }

}
