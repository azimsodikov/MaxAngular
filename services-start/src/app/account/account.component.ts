import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, this.account.status);
    // this.loggingService.logStatusChange(status);


    this.accountService.statusUpdated.emit(status);
    //this is another way to submit a event using a services. In accountService a new event is created and we just catching an event here 
    
  }
}

