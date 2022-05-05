import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  signin:boolean=true;

  ngOnInit(): void {
  }

  openSignin() 
  {
    // this.signup.signup=false;
    // this.signin=true;
    this.dialog.open(DialogComponent,{
      width:'30%',
    });
  }

}
