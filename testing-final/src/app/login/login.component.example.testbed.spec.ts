/* tslint:disable:no-unused-variable */
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "../auth.service";

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>; //A fixture is a wrapper for a component and it’s template.
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent); //	We create an instance of a component fixture through the TestBed, this injects the AuthService into the component constructor.

    // get test component from the fixture
    component = fixture.componentInstance; // We can find the actual component from the componentInstance on the fixture.


    // UserService provided to the TestBed
    authService = TestBed.get(AuthService); // We can get resolve dependencies using the TestBed injector by using the get function.

  });

  it('canLogin returns false when the user is not authenticated2', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
  
  it('canLogin returns false when the user is not authenticated2', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  /* When to use Angular's TestBed
    We will continue to use ATB for the rest of this section because:

    It allows us to test the interaction of a directive or component with it’s template.

    It allows us to easily test change detection.

    It allows us to test and use Angulars DI framework,

    It allows us to test using the NgModule configuration we use in our application.

    It allows us to test user interaction via clicks & input fields */
});