import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}
    /* strikes through all the goals */
/*     this.elem.nativeElement.style.textDecoration = 'line-through';
 */   
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }
  @HostListener("dbclick") onDoubleClicks(){
    this.textDeco("none")
  }

  private textDeco(action:string) {
    this.elem.nativeElement.style.textDecoration = action
  }
}

