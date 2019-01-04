import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipes-list/recipe-list.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
    declarations: [ // We moved all the Recipe related files to this feature module, except RecipeService, since we use that service in other
        // other parts of the application
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        // DropdownDirective we should not declare Directives in two places, thats why we took this off from here 
    ],
    imports: [
        CommonModule, // We have to add this CommonModule on every feature module. It gives you access the common angular features like ngClass, ngFor etc.
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule {

}