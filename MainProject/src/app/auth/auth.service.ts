import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    token: string;

    constructor(private router: Router){}
    
    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        ).then(
            (response) => console.log('signed up', response)
        );
    }

    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
                this.router.navigate(['/']);
                console.log('signed in', response)
                firebase.auth().currentUser.getToken()
                    .then(
                        (token: string) => this.token = token // This way we can access token and assign to the property
                    )
            }
        ).catch(
            error => console.log(error)
        );
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }
}