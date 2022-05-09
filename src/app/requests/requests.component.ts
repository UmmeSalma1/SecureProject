import { Component, OnInit, ViewChild } from '@angular/core';
// import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatTable} from '@angular/material/table';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'email', 'password', 'gender','phone_number','pan_card','address','is_approved', 'action'];
  dataSource!: MatTableDataSource<any>;

  // convertString(val:any){
  //    return val.toString();

  // }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  @ViewChild(MatTable) table: any;

  constructor(private dialog: MatDialog, public api : ApiService) { }

  ngOnInit(): void {
    this.requestKyc();
  }

  approve(id:any){
    this.api.approve(id).subscribe({
      next:(response)=>{
        alert("Request Accepted ");
        this.requestKyc();
      },
      error:(error)=>{
        console.log(error);
        alert("Something wrong ");
      }
    })
  }

  reject(id:any){
    this.api.reject(id).subscribe({
      next:(response)=>{
        alert("Request Rejected ");
        this.requestKyc();
      },
      error:(error)=>{
        console.log(error);
        alert("Something wrong ");
      }
    })
  }
  



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
  requestKyc(){
    this.api.requestKyc().subscribe({
      next:(response)=>{
        this.dataSource= new MatTableDataSource(response);
        console.log(this.dataSource);
      },
      error:(error)=>{
        console.log("Error while fetching Records !! ");
        alert("Error while fetching Records !! ");
      }
    });
  }
}
