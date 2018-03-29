import { Subject } from "rxjs";

export class UsersService {
    userActivated = new Subject();
    // Subject() acts as an observable as well as observer so we can call next() on ot and also we can subscribe to it

}