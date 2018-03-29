import { AuthService } from './../auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

// class MockAuthService extends AuthService { // we can simply extend the class and override some of the functions to fit our tests
//   authenticated = false;

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

// We can also use the real service with the help of Spy() of Jasmine and control the return values of the methods. Example is shown in the example file
// By using the spy feature of jasmine we can make any function return anything we want:

// The goal is to test pieces of code in isolation without needing to know about the inner workings of their dependencies.

class MockAuthService extends AuthService{
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('LoginComponent', () => {

  let component: LoginComponent;
  // let service: AuthService;// This is the expample with the real service;
  let service: MockAuthService;

  beforeEach(() => {
    // service = new AuthService(); // We get the new instance of AuthService() before each test runs //This is the expample with the real service;
    service = new MockAuthService();
    component = new LoginComponent(service);// // With that instance we get new instance of LoginComponent before each test runs
  });
  
  afterEach(() => {// We clean up data and localStorage after each test spec has been run.
    // localStorage.removeItem('token'); // Since we are working with Mock service we do not need clean up or anything
    service = null;
    component = null;
  });

  it('canLogin returns false when the user is not authenticated1', () => {
    service.authenticated = false; // We authenticated to false with mock service
    expect(component.needsLogin()).toBeTruthy(); // check component that that method really exist
  });

  it('canLogin returns false when the user is not authenticated1', () => {
    // localStorage.setItem('token', '12345');//We setup some data in localStorage in order to get the behaviour we want from AuthService.
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });
  /*So in order to test LoginComponent we would need to know the inner workings of AuthService.
  That’s not very isolated but also not too much to ask for in this scenario. 
  However imagine if LoginComponent required a number of other dependencies in order to run, 
  we would need to know the inner workings of a number of other classes just to test our LoginComponent.
  This results in Tight Coupling and our tests being very Brittle, i.e. likely to break easily.
  For example if the AuthService changed how it stored the token, 
  from localStorage to cookies then the LoginComponent test would break since it would still be setting the token via localStorage. 
  This is why we need to test classes in isolation, we just want to worry about LoginComponent and not about the myriad of other things LoginComponent depends on.
  We achieve this by Mocking our dependencies. Mocking is the act of creating something that looks like the dependency 
  but is something we control in our test. There are a few methods we can use to create mocks.*/


});
