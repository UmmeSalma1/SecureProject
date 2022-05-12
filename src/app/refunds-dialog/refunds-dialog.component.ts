import { Component, OnInit, ViewChild } from '@angular/core';
// import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// import { PUserDailogComponent } from '../p-user-dailog/p-user-dailog.component';

@Component({
  selector: 'app-refunds-dialog',
  templateUrl: './refunds-dialog.component.html',
  styleUrls: ['./refunds-dialog.component.scss']
})
export class RefundsDialogComponent implements OnInit {

  status: any= false;
  displayedColumns: string[] = ['id','transaction_id', 'refund_amount', 'refund_date',  'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, public api : ApiService) { }

  ngOnInit(): void {
    this.showRefundDetails();
  }
  showRefundDetails(){
    this.api.showRefundDetails().subscribe({
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
  refundDelete(id:any){
    this.api.refundDelete(id).subscribe({
      next:(response)=>{
        alert(" Refund Data has been deleted");
        this.showRefundDetails();
      },
      error:(error)=>{
        console.log(error);

        alert("Something goes  wrong ");
        this.showRefundDetails();
      }
    })
  }

}
