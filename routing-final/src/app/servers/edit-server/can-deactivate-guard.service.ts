import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


// We need to create our own interface to use it in other classes which implements angulars CanComponentDeactivate interface
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
// CanDeactivate interface has an method which needs to be implemented and pass the certain parameters to it
  canDeactivate(component: CanComponentDeactivate, 
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
