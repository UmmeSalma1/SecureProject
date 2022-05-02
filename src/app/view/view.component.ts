import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { ChildDialogComponent } from '../child-dialog/child-dialog.component';
import { ParentDialogComponent } from '../parent-dialog/parent-dialog.component';
import { RefundsDialogComponent } from '../refunds-dialog/refunds-dialog.component';
import { TransactionDialogComponent } from '../transaction-dialog/transaction-dialog.component';
import { VendorsDialogComponent } from '../vendors-dialog/vendors-dialog.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  viewParent(){
    this.dialog.open(ParentDialogComponent,{
      width:'60%'
    });

  }
  viewChild(){
    this.dialog.open(ChildDialogComponent,{
      width:'70%'
    });
  }
  viewCard(){
    this.dialog.open(CardDialogComponent,{
      width:'70%'
    });
  }
  viewTransaction(){
    this.dialog.open(TransactionDialogComponent,{
      width:'70%'
    });
  }
  viewVendor(){
    this.dialog.open(VendorsDialogComponent,{
      width:'70%'
    });
  }
  viewRefund(){
    this.dialog.open(RefundsDialogComponent,{
      width:'70%'
    });
  }
}
