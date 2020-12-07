import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myReactiveForm: FormGroup;

  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'project': new FormControl(
        null,
        [Validators.required, CustomValidators.restrictedProjects],
        CustomValidators.restrictedProjectsAsync
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
    // this.myReactiveForm.reset();
  }



}
