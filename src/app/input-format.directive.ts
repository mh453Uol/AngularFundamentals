import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// if input uses <input appInputFormat />
// it will apply this directive

// HostListener allows us to subscribe to 
// DOM event such as focus, blur, onKeyUp etc
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format: string;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('On Focus');
  }
  @HostListener('blur') onblur() {
    console.log('on Blur');

    //nativeElement is the DOM Object
    let value: string = this.el.nativeElement.value;

    if (value === 'lowercase') {
      //change input value to lowercase
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
  // @HostListener('mouseover') onMouseOver() {
  //   console.log('On Mouse Over');
  // }

  //ElementRef gives access to DOM event object

}
