import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuardService } from './../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';


const rceipesRoutes: Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]}, // We change the order with :id and new path because new should load first
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
    ]},
];  

@NgModule({
    imports: [
        RouterModule.forChild(rceipesRoutes)
    ],

    exports: [RouterModule]
})
export class RecipesRoutingModule {}