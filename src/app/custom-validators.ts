import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {

  // static restrictedName = 'Test';

  static restrictedProjects(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'projectIsForbidden': true};
    }
    return null;
  }

  static restrictedProjectsAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test2') {
            resolve({'projectIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 2000);
      }
    );
    return promise;
  }
}
