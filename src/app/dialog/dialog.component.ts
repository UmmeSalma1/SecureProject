import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

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
  
 
  emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl:any = new FormControl('', [Validators.required, Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.route.navigate(['/dashboard']);
  }
}
