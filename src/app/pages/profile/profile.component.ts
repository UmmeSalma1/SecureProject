import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { ApiService } from 'src/app/shared/api.service';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  id: number;
  Name: string;
  Email: string;
  PhoneNumber: number;
  Password: string;
  DOB: string;
  Address: string;
  DOJ: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     SlNo: 1,
//     Name: 'Umme Salma',  
//     Email:'ummesalma@gmail.com',
//     PhoneNumber:9876543210,
//     Password: 'salma123',
//     DOB: '22/12/1998',
//     Address:"Bengaluru",
//     DOJ:'22/12/2021'
// }

// ];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = [ 'id','name',  'email', 'phone_number','password','address', 'dob', 'joined_date'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatTable) table: any;


adminDetails(){
  this.api.adminDetails().subscribe({
    next:(response)=>{
      this.dataSource= new MatTableDataSource(response);
    },
    error:(error)=>{
      console.log("Error while fatching Records !! ");
      alert('"Error while fatching Records !! "');
    }
  });
}
  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.adminDetails();
  }
}
