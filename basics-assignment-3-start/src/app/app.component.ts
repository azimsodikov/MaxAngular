import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  
  timeStamps = [];

  showPasswords(event) {
    this.showPassword = !this.showPassword;
    // return this.timeStamps.push(this.timeStamps.length + 1);
    this.timeStamps.push(new Date());
    // let i = index; added to the end of the ngFor, we can access index numnber of the array
  }

}
