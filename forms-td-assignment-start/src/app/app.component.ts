import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Pro', 'Advanced'];
  selecSubs = 'Advanced'; // this will be our default option


  // #f="ngForm" will give access to the whole object
  onSubmit(data: NgForm){
    console.log(data);
  }
}
