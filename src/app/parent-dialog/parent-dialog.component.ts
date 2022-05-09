import { Component, OnInit, ViewChild } from '@angular/core';
// import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// import { PUserDailogComponent } from '../p-user-dailog/p-user-dailog.component';

@Component({
  selector: 'app-parent-dialog',
  templateUrl: './parent-dialog.component.html',
  styleUrls: ['./parent-dialog.component.scss']
})
export class ParentDialogComponent implements OnInit {

  status: any= false;
  displayedColumns: string[] = ['id','name', 'email', 'gender','phone_number','pan_card','address','is_approved', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, public api : ApiService) { }

  ngOnInit(): void {
    this.requestKyc();
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  requestKyc(){
    this.api.showParentDetails().subscribe({
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
  delete(id:any){
    this.api.reject(id).subscribe({
      next:(response)=>{
        alert("Data has been deleted");
        this.requestKyc();
      },
      error:(error)=>{
        console.log(error);
        alert("Something wrong ");
      }
    })
  }
}
