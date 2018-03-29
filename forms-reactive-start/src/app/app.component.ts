import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup; // To use the Reactive Forms Module we need to import ReactiveFormsModule instead of FormsModule in the app.module
  // This property at the end will hold our Forms Module which we create 
  forbiddenNamesArray = ['Chris', 'Anna'];
  // By adding this property on the form element [FormGroup]="signupForm", we telling angular not to craete template driven form, instead expect rewactive form
 // By adding formControlName="username", we matching controls with custom created controls
 // This form we created than gets synchronized with the form in the template 
  ngOnInit(){ // this method is called before template is being rendered
     // This is form object keys are quoted just on case when it gets minified, it will not get mixed up
    this.signupForm = new FormGroup({
      'userData': new FormGroup({ // We now just nesting our username and password inside a userData, then we change template to reflect the changes
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), // We should bind this to it then it will work
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),//Validators.required: way to validate the forms in Reactive approach
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    }); // This is theoretically how we create forms in the angular then we add controlls to it, which is all the input fields and radio buttons on the template

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value) // This is how we listen for value changes on the form
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status) // This is how we listen for status changes on the form
    );
    // We can also listen for individual controls with signupForm.get('username').valueChnages

    // Also we can setValues or patchValues by passing the objects
  }
  // To validate we simply access the signupForm property and it has get() method which accepts control name we want to accept, then we can check its validity
  // *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched" 'Validation of input fields'

  onSubmit() {
    console.log(this.signupForm); // We can easily gain access to the values through typescript, because we created ot here 
  }

  onAddHobby(){ // This is the way how you add controls to the form
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control); // We have to explixitlly cast this so typescript did not feak out
  }
  /* <div formArrayName="hobbies">
          <h4>Your Hobbies</h4>
          <button class="btn btn-default" type="button" (click)="onAddHobby()">Add Hobby</button>
          <div class="form-group"
               *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index">

            <input type="text" class="form-control" [formControlName]="i">
          </div>
        </div> This is how you nest form controls if you had nested form group*/ 


  forbiddenNames(control: FormControl):{[s: string]: boolean} { // This is the custom validation to check for the username
    if(this.forbiddenNamesArray.indexOf(control.value) !== -1){ // So if control has forbidden name it will return true, otherwise we should return  null or no return at all
      return {'nameIsForbidden': true}
    }
    return null;
  }
  //*ngIf="signupForm.get('userData.username').errors['nameIsForbidden']" we can take advantage of errors and act accordingly on the template



  // We can also craete asynch validators
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailForbidden': true});
        }else{
          resolve(null)
        }
      }, 1500);
    })
    return promise;
  }
}
