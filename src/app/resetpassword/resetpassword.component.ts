import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
// import { Router } from '@angular/router';

import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
export class User {

  email: any;
  password: any;
  password_confirmation: any;
  resetToken: any;

}
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})


export class ResetpasswordComponent implements OnInit {
  resetPasswordForm !: FormGroup;
  errors: any = null;

  hidePassword : boolean= true;
  hideConfirmPassword : boolean =true;

  constructor(private api: ApiService,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    public router: Router,
    private route:ActivatedRoute,
    private toast : NgToastService) {
      route.queryParams.subscribe(params => {
        // this.resetPasswordForm.resetToken = params['token']
        });
    }

    token:any ;

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'password_confirmation': ['', Validators.required],
      'token': [''],

    })
  }

  passwordReset(){
    this.resetPasswordForm.controls['token'].setValue(this.token);
    console.log(this.resetPasswordForm.value);
    this.auth.resetPassword(this.resetPasswordForm.value).subscribe(
      (result) => {
        console.log(result);
        this.toast.success({detail:"Success Message",summary:" Password has been Updated Successfully!!",duration:5000})

        // alert('Password has been updated Successfully');
        this.resetPasswordForm.reset();
        // this.dialogRef.close("Sign Up");
    this.router.navigate(['']);
  },
  (error) => {
    this.toast.info({detail:"info Message",summary:"Something Wrong !!, Try Again !!",duration:5000})

    this.errors = error.error;
    // alert('something went wrong');
  },
  );
  }
}
