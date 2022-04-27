import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
// import { MyErrorStateMatcher } from '../dialog/dialog.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-p-child-dailog',
  templateUrl: './p-child-dailog.component.html',
  styleUrls: ['./p-child-dailog.component.css']
})
export class PChildDailogComponent implements OnInit {

  // selectedValue: string;

  gender: Gender[] = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'},
    {value: 'others-2', viewValue: 'Others'},
  ];

  fnameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  lnameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  phone_numberFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  panFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  limitFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  genderFormControl:any = new FormControl('', [Validators.required, Validators.required]);

  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit(): void {
  }

}
