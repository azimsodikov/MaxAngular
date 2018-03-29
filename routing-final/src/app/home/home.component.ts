import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    // complex calculation
    // this is how you load different routes programatically
    // For example you wanna take the user to the different path after you get back something from the server
    // This is how you programnatically navigate the user from the component
    // navigate link does not know which route you are on, it just sends you the route you provide
    // You can provide second argument to the navigate method which tells navigate which route it go relatively
    // also through routeParams we can pass some data to the compoenent
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
