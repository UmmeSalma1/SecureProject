import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
// import { Router } from '@angular/router';

import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private api: ApiService,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    public router: Router,
    private route:ActivatedRoute,) {
      route.queryParams.subscribe(params => {
        // this.resetPasswordForm.resetToken = params['token']
        });
    }

    token:any = "xISluWWVM6SHXe4EOjFvaQQH4IFOF9IHR3eSYDbQ";

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'password_confirmation': ['', Validators.required],
      'token': ['', Validators.required],

    })
  }

  passwordReset(){
    this.resetPasswordForm.controls['token'].setValue("FmgrpqryXjqaUpWAJBNv9MerMDCkJFQwjKUn3Dxe");
    console.log(this.resetPasswordForm.value);
    this.auth.resetPassword(this.resetPasswordForm.value).subscribe(
      (result) => {
        console.log(result);
        alert('Password has been updated Successfully');
        this.resetPasswordForm.reset();
        // this.dialogRef.close("Sign Up");
    this.router.navigate(['']);
  },
  (error) => {
    this.errors = error.error;
    alert('something went wrong');
  },
  );
  }
}
