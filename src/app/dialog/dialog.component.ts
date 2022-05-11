import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from '../shared/token.service';
import { AuthStateService } from '../shared/auth-state.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent implements OnInit {

actionBtn : string= 'Sign In';

  emailFormControl: any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: any = new FormControl('', [Validators.required, Validators.required]);

  matcher = new MyErrorStateMatcher();

  loginForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public api: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() { }
  onSubmit() {
    console.log(this.loginForm.value);
    this.api.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
        alert('Successfully logged In');
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.dialogRef.close("Sign In");
        this.router.navigate(['dashboard']);
        // obj = new DialogComponent()
      },
      (error) => {
        this.errors = error.error;
      },
    );
  }
  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }

}
