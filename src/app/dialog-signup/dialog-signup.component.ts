import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

import { FormBuilder, FormGroup } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dialog-signup',
  templateUrl: './dialog-signup.component.html',
  styleUrls: ['./dialog-signup.component.css']
})
export class DialogSignupComponent implements OnInit {
  nameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl:any = new FormControl('', [Validators.required, Validators.required, Validators.min(8)]);
  password_confirmationFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  


  matcher = new MyErrorStateMatcher();
  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService) 
  {
    this.registerForm = this.fb.group({
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
    });
  }
  ngOnInit() {

  }
  
  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        alert('Registered Successfully');
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        // this.router.navigate(['login']);
      }
    );
  }
}