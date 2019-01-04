import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { AuthGuardService } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // This is how we can lazy load the module into our app
    // which means we only load whole recipes compoments when we visit the link not on the loading of the application
    {path: 'shoppingList', component : ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) // Only on the rootModule we should use forRoot(), in other cases we should use forChild() method of RouterModule
    ],  //  {preloadingStrategy: PreloadAllModules} with this configuration we can tell angular to preload all the lazy loaded content when app is downloaded
    exports: [RouterModule]

})

export class AppRoutingModule {}