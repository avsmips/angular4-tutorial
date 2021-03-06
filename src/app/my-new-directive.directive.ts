import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '.mydirective , [appMyNewDirective] , my-new-directive'
})
export class MyNewDirectiveDirective {
  element: any;
  noOfClick: number;

  @Input('callerName') car;

  constructor(element: ElementRef) {
    this.noOfClick = 0;
    this.element = element.nativeElement;
    this.element.style.color = 'blue';
    this.element.style.fontSize = '20px';
    // this.element.style.textAlign = 'center';
    this.element.style.border = '2px solid grey';
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.style.color = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.style.color = 'blue';
    this.element.style.backgroundColor = 'white';
  }

  @HostListener('click')
  onClick() {
    this.element.style.color = 'green';
    console.log('clicked on ' + this.car + ', number: ' + ++this.noOfClick);
  }

  @HostListener('dblclick')
  onDblClick() {
    this.element.style.color = 'white';
    this.element.style.backgroundColor = 'black';
  }

}
