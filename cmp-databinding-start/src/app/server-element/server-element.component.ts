import { 
    Component, 
    OnInit, 
    Input, 
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit, 
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild } from '@angular/core';





@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
  // encapsulation makes angular not assign uniwue attributes to this elements thats why if we assign styling to this directive 
  // it does affect all the elements
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagraph') paragraph: ElementRef;
  // This allows you access elements in prent components html, by local reference

  @Input() element: {type:string, name:string, content: string};
  // This is the custom type created to make it accessible from other components 
  // We can create alies by passing alias name to the decorator like @Input('serverElement'), then anywhere we use this decorator, we should 
  // target by this alies name 
  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    // This is the only lifecycle hook that needs parametr changes to be passed
    // Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
    // Called before ngOnInit() and whenever one or more data-bound input properties change.
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    // ngOnInit() is the angulars one of the lifecycle hooks 
    /* Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
      Called once, after the first ngOnChanges(). */
    console.log('Header: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
    /*Detect and act upon changes that Angular can't or won't detect on its own.
     Called during every change detection run, immediately after ngOnChanges() and ngOnInit(). */
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    /*Respond after Angular projects external content into the component's view.
    Called once after the first ngDoCheck(). A component-only hook. */
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
    
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
    /*Respond after Angular checks the content projected into the component.
    Called after the ngAfterContentInit() and every subsequent ngDoCheck(). A component-only hook. */
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    /*Respond after Angular initializes the component's views and child views.
    Called once after the first ngAfterContentChecked(). A component-only hook.*/
    console.log('Header: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
    /* Respond after Angular checks the component's views and child views.
    Called after the ngAfterViewInit and every subsequent ngAfterContentChecked(). A component-only hook. */
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
    /*Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks. 
    Called just before Angular destroys the directive/component. */
  }


}
