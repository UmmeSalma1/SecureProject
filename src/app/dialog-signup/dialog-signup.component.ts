import { Component,Inject,  OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

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
  hidePassword:boolean=true;
  hideConfirmPassword:boolean= true;
  nameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl:any = new FormControl('', [Validators.required, Validators.required, Validators.min(8)]);
  password_confirmationFormControl:any = new FormControl('', [Validators.required, Validators.required]);

  actionBtn: string='Sign Up';

  matcher = new MyErrorStateMatcher();
  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public api: AuthService,
    private dialogRef: MatDialogRef<DialogSignupComponent>,
    private toast : NgToastService,
    )
  {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]*'),Validators.minLength(4)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]],
    },{
      Validators:this.MustMatch('password','password_confirmation')
    })
  }

  mustMatch : any;

  MustMatch(ControlName:string, MatchingControlName:string)
  {
    return (formGroup:FormGroup)=>{
      const control= formGroup.controls[ControlName];
      const matchingControl= formGroup.controls[MatchingControlName];

      if(matchingControl.errors){
        return
      }
      if(control.value!=matchingControl.value){
        matchingControl.setErrors({MustMatch:true})
      }else{
        matchingControl.setErrors(null);
      }

    }
  }

 get f(){
    return this.registerForm.controls;
  }


  ngOnInit() {
    this.MustMatch(this.registerForm.controls['password'].value,this.registerForm.controls['password_confirmation'].value);
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.api.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        // alert('Registered Successfully');
        this.toast.success({detail:"Success Message",summary:"Resgiter Successfully Please Login!!",duration:5000})
        this.registerForm.reset();
        this.dialogRef.close("Sign Up");
        this.router.navigate(['']);

      },
      (error) => {
        this.toast.info({detail:"info Message",summary:"Something Wrong !!, Try Again !!",duration:5000})
        this.errors = error.error;
      },
    );
  }
}
