import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// By adding ngModel on the input element, this control (input data) should be included in
// the angulars JS representaion of form creation, we simply registering the control (input data)

// <form (ngSubmit)="onSubmit(f)" #f="ngForm"> this is the way we get access to the object that angular creaetd on submitting the page 
// By simply adding required on the form, we can now validate the form, and also adding email attribute we can check validity of the email address



// input.ng-invalid.ng-touched we can change the color of the forms
// #email="ngModel" on the input field gives access to the additonal info about input field, then we can check validity on the fly
// [ngModel]="'defaultValue'" this way can be prepopulated the input fields

//ngModelGroup="userData" by adding this, we can group user input data more nicer wayit differently
// #userData="ngModelGroup" same thing as above but using 

export class AppComponent {
 
  answer:any = '';
  genders: string[] = ['male', 'female']; 
  @ViewChild('f') submitForm: NgForm; //This is another way to access the form object

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;


  suggestUserName() { 
    const suggestedName = 'Superuser';

    this.submitForm.form.patchValue({  // This is the way you can add value to the parts of the form programatically, also with setValue() you can set the whole object
      userData: {
        username: suggestedName
      }
    });
  }


  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.submitForm);
    this.submitted = true;
    this.user.username = this.submitForm.value.userData.username;
    this.user.email = this.submitForm.value.userData.email;
    this.user.answer = this.submitForm.value.questionAnswer;
    this.user.secretQuestion = this.submitForm.value.secret;
    this.user.gender = this.submitForm.value.gender;

    this.submitForm.reset(); // the way to empty and reset the forms
  }
}
