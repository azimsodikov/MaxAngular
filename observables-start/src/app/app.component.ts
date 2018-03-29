import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Observable is various data sources User Input events, Http requests, Triggered in the code ....
// It will have three phrases Handle data, Handle Error, Handle completion, You write code which gets executed during this period
/* In ReactiveX an observer subscribes to an Observable. Then that observer reacts to whatever item or sequence of items the Observable emits. 
This pattern facilitates concurrent operations because it does not need to block while waiting for the Observable to emit objects, 
but instead it creates a sentry in the form of an observer that stands ready to react appropriately at whatever future time the Observable does so.
This page explains what the reactive pattern is and what Observables and observers are (and how observers subscribe to Observables).
 Other pages show how you use the variety of Observable operators to link Observables together and change their behaviors.
This documentation accompanies its explanations with “marble diagrams.” Here is how marble diagrams represent Observables and transformations of Observables: 


In many software programming tasks, you more or less expect that the instructions you write will execute and complete incrementally, one-at-a-time, 
in order as you have written them. But in ReactiveX, many instructions may execute in parallel and their results are later captured, in arbitrary order, by “observers.” 
Rather than calling a method, you define a mechanism for retrieving and transforming the data, in the form of an “Observable,” and then subscribe an observer to it, at which point 
the previously-defined mechanism fires into action with the observer standing sentry to capture and respond to its emissions whenever they are ready.
An advantage of this approach is that when you have a bunch of tasks that are not dependent on each other, you can start them all at the same time 
rather than waiting for each one to finish before starting the next one — that way, your entire bundle of tasks only takes as long to complete as the longest task in the bundle.
There are many terms used to describe this model of asynchronous programming and design. This document will use the following terms: 
An observer subscribes to an Observable. An Observable emits items or sends notifications to its observers by calling the observers’ methods.
In other documents and other contexts, what we are calling an “observer” is sometimes called a “subscriber,” “watcher,” or “reactor.” 
This model in general is often referred to as the “reactor pattern”.*/

export class AppComponent implements OnInit{

  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if(id === 1){
          this.user1Activated = true;
        }else if(id === 2){
          this.user2Activated = true;
        }
      }
    );
  }

}
