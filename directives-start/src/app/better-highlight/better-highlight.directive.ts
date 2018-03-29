import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // This is the another way to create a directive using renderer method. renderer2 method has several methods that can be implemented.
  // Each method has its own requirements, ElementRef gives us access to the elements of that directive
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // renderer method is a better way to create a directives because, when we dont use renderer and code is not running on the browser it will give error beacuse we
  // dont have access to the DOM directly from the server
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'pink'; 
  // With this we can pass the color values dynamically from the directive

  



  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  // With this decorator you bind to any property of the element you are sitting on, this case we used style property

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    // this.backgroundColor = 'blue'

    // @HostBinding lets you bind that element with your element without the renderer method

    this.backgroundColor = this.highlightColor;
  }
  // @HostListener is a event listener decorator which accepts event name as an argument and listens for the events 

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    this.backgroundColor = this.defaultColor;
  }
}
