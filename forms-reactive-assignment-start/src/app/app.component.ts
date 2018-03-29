import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];

  projectForm: FormGroup;

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenNameAsynch),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  // checkProjectName(control: FormControl): {[s: string]: boolean} {
  //   if(control.value === 'Test'){
  //     return {'badProjectName': true}
  //   }
  //   return null;
  // }

  forbiddenNameAsynch(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=> {
        if(control.value === 'Test'){
          resolve({'badProjectName': true});
        }else {
          resolve(null);
        }
      }, 2000)
    })
    return promise;
  }
}
