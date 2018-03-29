import { UserService } from './../user.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private userService: UserService,
              private counterService: CounterService){
    
  }

  ngOnInit(){
  }
  onSetToInactive(id: number){
    this.userService.setToInactive(id);
  }


}
