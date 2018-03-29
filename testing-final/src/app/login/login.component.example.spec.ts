import {LoginComponent} from './login.component';
import {AuthService} from "../auth.service";

describe('Component: Login', () => {

  let component: LoginComponent;
  let service: AuthService;
  let spy: any;

  beforeEach(() => { //We create a real instance of AuthService and inject it into the LoginComponent.
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => { //In our teardown function there is no need to delete the token from localStorage.
    service = null;
    component = null;
  });


  it('canLogin returns false when the user is not authenticated3', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false); //We create a spy on our service so that if the isAuthenticated function is called it returns false.
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();// We can even check to see if the isAuthenticated function was called.
  });

  it('canLogin returns false when the user is not authenticated3', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});