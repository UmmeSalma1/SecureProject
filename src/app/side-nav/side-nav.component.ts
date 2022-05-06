import { Component, OnInit } from '@angular/core';
import { ChildDetailsComponent } from '../child-details/child-details.component';
import { PUserDailogComponent } from '../p-user-dailog/p-user-dailog.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewTransactionComponent } from '../view-transaction/view-transaction.component';
import { ViewtransactionComponent } from '../viewtransaction/viewtransaction.component';
import { ParentDetailsComponent } from '../parent-details/parent-details.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openparent_profileDailog()
  {
    // this.signup.signup=false;
    // this.signin=true;
    this.dialog.open(ParentDetailsComponent,{
      width:'70%'
    });
  }
  openchild_detailsDailog(){
    this.dialog.open(ChildDetailsComponent,{
      width:'70%'
    });
}
opentransactionDailog(){
  this.dialog.open(ViewtransactionComponent,{
    width:'70%'
  });
}
}
