import { Component,Inject,  OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

import { FormBuilder, FormGroup } from '@angular/forms';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'app-dialog-signup',
  templateUrl: './dialog-signup.component.html',
  styleUrls: ['./dialog-signup.component.css']
})
export class DialogSignupComponent implements OnInit {
  // nameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl:any = new FormControl('', [Validators.required, Validators.required, Validators.min(8)]);
  // password_confirmationFormControl:any = new FormControl('', [Validators.required, Validators.required]);

  actionBtn: string='Sign Up';

  // matcher = new MyErrorStateMatcher();
  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public api: AuthService,
    private dialogRef: MatDialogRef<DialogSignupComponent>)
  {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }
  ngOnInit() {}

  onSubmit() {
    console.log(this.registerForm.value);
    this.api.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        alert('Registered Successfully');
        this.registerForm.reset();
        this.dialogRef.close("Sign Up");
        this.router.navigate(['']);

      },
      (error) => {
        this.errors = error.error;
      },
    );
  }
}
