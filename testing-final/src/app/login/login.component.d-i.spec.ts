/* tslint:disable:no-unused-variable */
import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "../auth.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement;

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
    el = fixture.debugElement.query(By.css('a'));
  });
  /* 
  ////////Resolving via TestBed///////////////////////////////////////

    TestBed.configureTestingModule({
        providers: [AuthService]
    });
  /////////Resolving via the inject function/////////////////////////

    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
      inject([AuthService], (injectService: AuthService) => {
      expect(injectService).toBe(testBedService);
      })
    ); 
     Makes it clear what dependencies each spec function uses.
      If each test spec requires different mocks and spys inject() is a better solution that resolving it once per test suite. 
  /////////////////Overriding the components providers/////////////////

    class MockAuthService extends AuthService {
        isAuthenticated() {
        return 'Mocked';
        }
    }

    TestBed.overrideComponent(
        LoginComponent,
        {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
    );

    The syntax is pretty specific, it’s called a MetaDataOverride and it can have the properties set, add and remove. We use set to completely replace the providers array with the values we’ve set.

    /////////////////Resolving via the component injector///////////////////////////

    componentService = fixture.debugElement.injector.get(AuthService);

   */



});