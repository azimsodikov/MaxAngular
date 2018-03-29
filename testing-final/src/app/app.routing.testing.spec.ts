import { AppComponent, routes } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";



describe('Router: App', () => {

    let location: Location;
    let router: Router;
    let fixture;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes)], //We import our RouterTestingModule with our routes.
        declarations: [
          HomeComponent,
          SearchComponent,
          AppComponent
        ]
      });
  
      router = TestBed.get(Router); //We grab a reference to the injected Router.
      location = TestBed.get(Location); //We grab a reference to the injected Location.
  
      fixture = TestBed.createComponent(AppComponent); //	We ask the test bed to create an instance of our root AppComponent. 
      // We don’t need this reference in our test specs but we do need to create the root component with the router-outlet so the router has somewhere to insert components.
      router.initialNavigation(); //	This sets up the location change listener and performs the initial navigation.
      //We are now ready to create our test specs.
      
    });
    afterAll(() => {
        router.navigate([' ']);
    });

    
    it('fakeAsync works', fakeAsync(() => {
        let promise = new Promise((resolve) => {
        setTimeout(resolve, 10)
        });
        let done = false;
        promise.then(() => done = true);
        tick(50);
        expect(done).toBeTruthy();
    }));

    it('navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate([''])
        .then(() => expect(router.url).toEqual('/home')); 
    }));

    it('navigate to "search" takes you to /search', fakeAsync(() => {
        router.navigate(['/search'])
        .then(() => expect(location.path()).toBe('/search'));
    }));
});