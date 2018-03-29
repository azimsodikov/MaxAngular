import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";


@Injectable()
// To receieving service to be able receive a service we use @Injectible 
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    constructor(private loggingService: LoggingService) {}
    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    statusUpdated = new EventEmitter<string>();

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }
}