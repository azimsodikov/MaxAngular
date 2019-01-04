import { NgModule } from '@angular/core';

import { AuthGuardService } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListSerice } from './../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({ // We use core module to clean up our appModule 
    declarations: [
        HeaderComponent,
        HomeComponent
    ],

    imports: [
        SharedModule,
        AppRoutingModule
    ],

    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListSerice, 
        RecipeService, 
        DataStorageService, 
        AuthService, 
        AuthGuardService]
})
export class CoreModule{}