import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {


  constructor(private loggingService : LoggingService, 
              private accountService : AccountService){
    // this.accountService.statusUpdated.subscribe(
    //   (status: string)=> alert('New status ' + status)
    // );
    //We are catching an event using services. in account.component.ts we emitted an event and we are catching it here using a subscribe method
    // which expects an callback function which will receive a new status;
  }

  onCreateAccount(accountName: string, accountStatus: string) {   
    this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
  }
}
