import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
// This is the normal angular service which helps to prevent certain components being rendered on the page 
@Injectable()// injectable are added because we want to use other service in this service
export class AuthGuard implements CanActivate, CanActivateChild { // You need to implement these two interfaces which makes you 
  // implement its methods
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated() // since this is the promise, we just gonna return a promise back
      .then( // In the auth.service.ts we are returning a promise if its value is true, we will allow the user to the component, otherwise we return to the home component
        (authenticated: boolean) => { // After we setup this we can go to the app-routing.module.ts and configure route that we want to protect
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot, // By implementing this canActivateChild method we can only guard the child components which is nested on this 
    // on the compoenent we are guarding 
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
