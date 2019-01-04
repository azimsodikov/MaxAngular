import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedChoice:string = 'recipe';

  onNavigate(choice: string){// choice is coming from heading component through event creation
    this.loadedChoice = choice;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAgbtfe20WaDAHjmzygHstztdWPOUYdVtU",
      authDomain: "recipeangular-c11df.firebaseapp.com"
    });
  }
}
