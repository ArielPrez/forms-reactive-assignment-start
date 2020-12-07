import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myReactiveForm: FormGroup;
  restrictedName = 'Test';
  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'project': new FormControl(null, Validators.required, this.restrictedProjectsAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
    // this.myReactiveForm.reset();
  }

  // restrictedProjects(control: FormControl): {[s: string]: boolean} {
  //   if (this.restrictedName === control.value) {
  //     return {'projectIsForbidden': true};
  //   }
  //   return null;
  // }

  restrictedProjectsAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test') {
            resolve({'projectIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

}
