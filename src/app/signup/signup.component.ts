import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';

import { DialogSignupComponent } from '../dialog-signup/dialog-signup.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  signup:boolean=true;
  
  ngOnInit(): void {
  }
 
  openSignup() 
  {
    this.dialog.open(DialogSignupComponent,{
      width:'30%'
    });
  }
}
