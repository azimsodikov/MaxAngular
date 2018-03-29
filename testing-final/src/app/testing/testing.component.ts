import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

export class User { 
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<User>(); 
  @Input() enabled = true; 
  constructor() { }

  ngOnInit() {
  }

  login(email, password) { 
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }

}
