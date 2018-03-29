import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    // We creating out custom Directive, so when this class gets instantieted, this constructor function gets run and gives access to that 
    // particular element that we used on.

    constructor(private elementRef: ElementRef){
    }
    // Just like a components directive has a access to lifecycle hooks. it does not have access all the hooks but it has access to ngOnInit()
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
    }

    // Before we use this directive, we have to inform angular about this directive inside a declarations in app.module.ts
}