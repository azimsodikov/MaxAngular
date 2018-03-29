import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  numbersObsSubscription: Subscription; // Later on we add properties to is
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000) // This is the way to create a observables 
    .map( // There a lot of operators we can use map is simply one of them, it just returns new Observable with its data 
      (num: number)=>{
        return num * 2;
      }
    );

    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number)=>{
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) =>{

      setTimeout((()=>{
        observer.next('first package');
      }),2000);

      setTimeout((()=>{
        observer.next('second package');
      }),4000);

      setTimeout((()=>{
        // observer.error('this does not work');
        observer.complete();
      }),5000);

      setTimeout((()=>{ // Once complete() method called it stops executing the code so below line does not runs
        // observer.error('this does not work');
        observer.next('third package');
      }),6000);

    });// this is the way to create your own observable, then we can subscribe to this observable

    this.customObsSubscription = myObservable.subscribe( // observable always accepts three arguments data, error and complete 
      (data: string)=> { console.log(data); },
      (error: string)=> { console.log(error); },
      ()=> { console.log('Observable completed'); }
    );

    // When there is observable which we subscibed does not automatically gets destroyed, we manually have to unsubscribe from it otherwise 
    // it may cause a MEMORY LEAK

  }

  ngOnDestroy(){
    this.customObsSubscription.unsubscribe(); // This way we now unsubscribed from this observables, so whenever this component gets destroyed 
    // this observable will be unsubscribed too, cleaned up the space
    this.numbersObsSubscription.unsubscribe();
  }
} 
