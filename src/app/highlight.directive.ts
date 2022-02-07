import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.quoteStyle("yellow")
  }

  private quoteStyle(action:string){
    this.elem.nativeElement.style.backgroundColor=action;
  }

}
