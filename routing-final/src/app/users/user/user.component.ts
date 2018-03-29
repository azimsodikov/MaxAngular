import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }//ActivatedRoute has a lot of useful methods, one of them is accessing the route

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],// This property is set in app.module with the colon should exactly match
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params // This is better way to set params using observables which gets executed only when params changed that case reflect the changes on the screen
      .subscribe( // params is an observable that we can subscribe, then whenever value changes, it will update, otherwise does not update the component
        (params: Params) => {
          this.user.id = params['id'];// This is how you can access/fetch the routeParams data from the URL
          this.user.name = params['name'];
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe(); // We should unsubscribe from the observables to prevent a data leak
    // Once this component gets destroyed, this ngDestroy method will run and it unsubscribes from it 
  }

}
