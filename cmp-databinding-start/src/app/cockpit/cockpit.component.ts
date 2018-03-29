import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  // EventEmitter is an object in Angular which allows to create your own events
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  // Output is a decorator which allows to broadcast this events
  // Just like @Output decorator, we can give custom alias by passing the name as a argument into @Output('name')

  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContent') serverContent: ElementRef
  // This is the another way to directly access the DOM elements from component through using @ViewChild and name of the local reference
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    // We can access elements from directive through this way, instead of two way data binding
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
      // Even though we can access the DOM values this way, we should never set the values to the element
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
