import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [ // This const will hold all of the application routes, 
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard], // This is the guard that we created in the auth-guard.service.ts
    component: ServersComponent,
    children: [ // We neste child routes into parent component by passing it as a second argument to the server compoenent 
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    // With colon: we tell angular this is the dynamic part 
    // of the application, later on we can get access to that data
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' } // This is the wildcard route when user enters URL which is not avaiable, instead of giving an error it will
  // simply redirects it here 
];

// By just declaringthis routes angular does not know what to do with this routes, we need to import RouteModule
// this have a method forRoot() which accepts appRoutes as an argument
// angular somehow should know how to use this routes and this should follow specific pattern
// This is the good practice to initialize all the routes here 


// The way we add the full functionality is to add <router-outlet></router-outlet> angulars special directive that marks the document 
// to load the compoenent of currently selected route (lesson 115)

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes) // routes const should be registered here through RouterModule
  ],
  exports: [RouterModule] // We export this module to the app module through exports array
})
export class AppRoutingModule {

}
