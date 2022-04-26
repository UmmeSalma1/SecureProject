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

@Component({
  selector: 'app-p-user-dailog',
  templateUrl: './p-user-dailog.component.html',
  styleUrls: ['./p-user-dailog.component.css']
})
export class PUserDailogComponent implements OnInit {
  nameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  phone_numberFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  panFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  addressFormControl:any = new FormControl('', [Validators.required, Validators.required])
  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit(): void {
  }

}
