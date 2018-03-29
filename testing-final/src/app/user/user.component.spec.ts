/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

describe('Component: User', () => {
  beforeEach(() => { // This is how we tell angular to create components before running tests
    TestBed.configureTestingModule({ // This is like NgModule where you declare what component you are testing
      declarations: [UserComponent]
    });
    // .compileComponents(); should be called if we do not use webpack, becuase webpack workflow works differently than other situations
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);// This is gonna create this component through testBed 
    let app = fixture.debugElement.componentInstance; // This is how you access your component instance through debugElement function
    expect(app).toBeTruthy();// This checks that app component is created or not
  });

  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService); // This is how we angular to get the service get injected in this test 
    fixture.detectChanges(); // This is the way we tell angular that state is updated and run the change detection mechanism
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true; // This is how we simulate the user logged in
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement; // This is how we get access to the html template of the component 
    expect(compiled.querySelector('p').textContent).toContain(app.user.name); // this is how we test that element to contain the username
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name); // This is how we test that this element does not contain this element
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', async(() => { // This case we wrappping our callback function with async() function
    // It creates kinda async testing enviroment for the angular 4
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => { // When promise is resolved, then this function runs
      expect(app.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => { // This is the alternative way of using async but with tick() function
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');

  }));
});
