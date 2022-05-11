import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  SlNo: number;
  CardNumber: number;
  VendorName: string;
  Transaction_Amount: number;
  Limit_Balance: number;
  Transaction_Date: any;
  transaction_Status: boolean;

}
 
/* card no, vendor name, trans amt, limit bal,trans date, trans status */

const ELEMENT_DATA: PeriodicElement[] = [
  {
    SlNo: 1,
    CardNumber: 1010,
    VendorName: 'Salma',
    Transaction_Amount: 500,
    Limit_Balance:1500,
    Transaction_Date: '26/04/2022',
    transaction_Status: true,

}

];

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {

  displayedColumns: string[] = [ 'SlNo','CardNumber', 'VendorName', 'Transaction_Amount', 'Limit_Balance', 'Transaction_Date', 'transaction_Status'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: any;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
