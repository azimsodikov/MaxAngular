import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import {Routes} from "@angular/router";


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

}
