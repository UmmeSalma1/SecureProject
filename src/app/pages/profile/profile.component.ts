import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  SlNo: number;
  Name: string;
  Email: string;
  PhoneNumber: number;
  DOB: string;
  Address: string;
  DOJ: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    SlNo: 1,
    Name: 'Umme Salma',  
    Email:'ummesalma@gmail.com',
    PhoneNumber:9876543210,
    DOB: '22/12/1998',
    Address:"Bengaluru",
    DOJ:'22/12/2021'
}

];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = [ 'SlNo','Name',  'Email', 'PhoneNumber','Password', 'DOB', 'Address', 'DOJ'];
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
