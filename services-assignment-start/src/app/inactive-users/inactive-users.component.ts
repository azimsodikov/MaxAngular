import { CounterService } from './../counter.service';
import { UserService } from './../user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];


  constructor(private userService: UserService,
              private counterService: CounterService){

  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
