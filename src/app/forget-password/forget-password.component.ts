import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
forgetPasswordForm !: FormGroup;
errors: any = null;

  constructor(public router: Router,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toast:NgToastService, private auth: AuthService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      'email': ['', Validators.required],

    })
  }

  forgetDailog(){
    console.log(this.forgetPasswordForm.value);
    this.auth.sendEmail(this.forgetPasswordForm.value).subscribe(
      (result) => {
        // console.log(result);
        // alert('Password reset link has been sent Successfully');
        this.forgetPasswordForm.reset();
        // this.dialogRef.close("Sign Up");
    // this.router.navigate(['forgetpopup']);
    this.toast.success({detail:"Success Message",summary:" Please Check Your Mail, We Send a Link !!",duration:5000})
    this.router.navigate(['/forgetpopup']);
  },
  (error) => {
    this.errors = error.error;
    this.toast.error({detail:"Failed Message",summary:"Something went wrong, Try again!!",duration:5000})

  },
  );
}
}
