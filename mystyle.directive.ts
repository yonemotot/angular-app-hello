import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'blue';
    el.nativeElement.style.background = '#ddf'
   }

}
