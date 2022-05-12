import { Component, OnInit, ViewChild } from '@angular/core';
// import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-vendors-dialog',
  templateUrl: './vendors-dialog.component.html',
  styleUrls: ['./vendors-dialog.component.scss']
})
export class VendorsDialogComponent implements OnInit {

  status: any= false;
  displayedColumns: string[] = ['id','name', 'email', 'password','phone_number','address', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, public api : ApiService) { }

  ngOnInit(): void {
    this.showVendorDetails();
  }
  showVendorDetails(){
    this.api.showVendorDetails().subscribe({
      next:(response)=>{
        this.dataSource= new MatTableDataSource(response);
      },
      error:(error)=>{
        console.log("Error while fatching Records !! ");
        alert('"Error while fatching Records !! "');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  vendorDelete(id:any){
    this.api.vendorDelete(id).subscribe({
      next:(response)=>{
        alert(" Vendor Data has been deleted");
        this.showVendorDetails();
      },
      error:(error)=>{
        console.log(error);

        alert("Something goes  wrong ");
        this.showVendorDetails();
      }
    })
  }

}
