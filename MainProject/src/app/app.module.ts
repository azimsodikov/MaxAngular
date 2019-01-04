import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';


@NgModule({
  declarations: [ // In this declarations array, we define what components, directives and  pipes this module uses
    // We can make some feature modules and split up our app. example recipe related staff could be on its own module, and then we can 
    // import that module into our appModule.
    AppComponent
    


  ],
  imports: [ // In this array, we usually mention Built In modules that Angular ships with, and also our routing modules, that we declared in 
    // in app-routing.modules.ts. Modules helps bundle up certain functionality of the app, and we can then import it in our app.
    BrowserModule, // This is the reason why we dont need CommonModule in appModule, because BrowserModule already have all the functionality
    // of the CommonModule with some additional features.
    AppRoutingModule,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  // We removed providers array and put it on coreModule just to keep this file lean
  
  // This providers array, we declare services that we wanna use in our entire app, when we instantiate the service, it will give us the same instance of that service
  bootstrap: [AppComponent]
})

export class AppModule { }
