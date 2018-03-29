/* tslint:disable:no-unused-variable */
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "../auth.service";
import {DebugElement} from "@angular/core"; 
import {By} from "@angular/platform-browser"; 
//We’ve imported a few more classes that are needed when interacting with a components view, DebugElement and By.

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement; // We have another variable called el which holds something called a DebugElement.


  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a')); //We store a reference to a DOM element in our el variable.
  });


//   xit('login button hidden when the user is authenticated', () => {
//     expect(el.nativeElement.textContent.trim()).toBe('');
//     //We initially expect the text inside the a tag to be blank.
//     // That’s because when Angular first loads no change detection has been triggered 
//     // and therefore the view doesn’t show either the Login or Logout text.

//     fixture.detectChanges();
//     expect(el.nativeElement.textContent.trim()).toBe('Login');

//     spyOn(authService, 'isAuthenticated').and.returnValue(true);
//     fixture.detectChanges();
//     expect(el.nativeElement.textContent.trim()).toBe('Login');
//   });


  /* By using the ATB and fixtures we can inspect the components view through fixture.debugElement 
    and also trigger a change detection run by calling fixture.detectChanges(). */
});