import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClick(){
    this.quoteStyle("#BE95C4")
  }

  private quoteStyle(action:string){
    this.elem.nativeElement.style.backgroundColor=action;
  }

}
