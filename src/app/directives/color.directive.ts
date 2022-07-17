import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  constructor(private el: ElementRef) {
    //this.el.nativeElement.style.backgroundColor = 'yellow';

   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#6b9795');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}