import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {//	Before each test spec is run we create a new instance of AuthService and store on the service variable.
    service = new AuthService;
  });

  afterEach(() => {// 	After each test spec is finished we null out our service and also remove any tokens we stored in localStorage.
    service = null;

    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated when there is a token', () => {//We pass to the it function a human readable description of what we are testing. This is shown in the test report and makes it easy to understand what feature isn’t working.

    localStorage.setItem('token', '1234');// We setup some spec only data in local storage which should trigger the effect we want.

    expect(service.isAuthenticated()).toBeTruthy();// 	We test an expectation that the service.isAuthenticated() function returns something that resolves to true.

  });

  it('should return false from isAuthenticated when there is no token', () => { // Opposite case happens
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
