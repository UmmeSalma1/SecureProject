import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {PUserDailogComponent} from '../p-user-dailog/p-user-dailog.component';
import {PChildDailogComponent} from '../p-child-dailog/p-child-dailog.component';

import { ViewChildDailogComponent } from '../view-child-dailog/view-child-dailog.component';
import { ViewTransactionComponent } from '../view-transaction/view-transaction.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  

  openViewChildDailog() 
  {
    // this.signup.signup=false;
    // this.signin=true;
    this.dialog.open(ViewChildDailogComponent,{
      width:'70%'
    });
  }

  openViewTransactionDailog() 
  {
    // this.signup.signup=false;
    // this.signin=true;
    this.dialog.open(ViewTransactionComponent,{
      width:'70%'
    });
  }
}
