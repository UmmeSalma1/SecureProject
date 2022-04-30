import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
// import { MyErrorStateMatcher } from '../dialog/dialog.component';
import {FormControl, FormBuilder,FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

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
  selector: 'app-p-user-dailog',
  templateUrl: './p-user-dailog.component.html',
  styleUrls: ['./p-user-dailog.component.css']
})
export class PUserDailogComponent implements OnInit {

  // selectedValue: string;

  gender: Gender[] = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'},
    {value: 'others-2', viewValue: 'Others'},
  ];

  nameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  phone_numberFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  panFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  addressFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  genderFormControl:any = new FormControl('', [Validators.required, Validators.required]);

  matcher = new MyErrorStateMatcher();
  parentForm:FormGroup;
  
  constructor(
    public fb: FormBuilder,
  ) { 
    this.parentForm =this.fb.group({});
  }

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.parentForm.value);
}
}
