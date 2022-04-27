import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
// import { DatepickerDropdownPositionX } from '@angular/material/datepicker';


export interface PeriodicElement {
  SlNo: number;
  FirstName: string;
  LastName: string;
  DOB: string;
  Email: string;
  PhoneNumber: number;
  Gender: string;
  MonthlyLimit: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    SlNo: 1,
    FirstName: 'Umme', 
    LastName: 'Salma', 
    DOB: '22/12/1998',
    Email:'ummesalma@gmail.com',
    PhoneNumber:9876543210,
    Gender:"Female",
    MonthlyLimit:5000
}

];

@Component({
  selector: 'app-view-child-dailog',
  templateUrl: './view-child-dailog.component.html',
  styleUrls: ['./view-child-dailog.component.css']
})
export class ViewChildDailogComponent implements OnInit {
  displayedColumns: string[] = [ 'SlNo','FirstName', 'LastName', 'DOB', 'Email', 'PhoneNumber', 'Gender', 'MonthlyLimit'];
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

 



