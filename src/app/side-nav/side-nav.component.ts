import { Component, OnInit } from '@angular/core';
import { ChildDetailsComponent } from '../child-details/child-details.component';
import { PUserDailogComponent } from '../p-user-dailog/p-user-dailog.component';
import {MatDialog} from '@angular/material/dialog';

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
    this.dialog.open(PUserDailogComponent,{
      width:'30%'
    });
  }
  openchild_detailsDailog(){
    this.dialog.open(ChildDetailsComponent,{
      width:'60%'
    });
}
}
