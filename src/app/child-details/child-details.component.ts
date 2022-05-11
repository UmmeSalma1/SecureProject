import { Component, OnInit, ViewChild } from '@angular/core';
import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ViewtransactionComponent } from '../viewtransaction/viewtransaction.component';
@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id','first_name', 'last_name', 'dob', 'email','gender','phone_number','monthly_limit','is_approved','view_card','view_transaction'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  actionBtn:string='View Transaction'

  constructor(private dialog: MatDialog, public api : ApiService,
    private dialogRef: MatDialogRef<PChildDailogComponent>) {

  }

  ngOnInit(): void {
    this.showApproveChild();
  }

  openadd_childDailog(){
    this.dialog.open(PChildDailogComponent,{
      width:'30%'
    });
  }
  opentransactionDailog(id:any){
    this.dialogRef.close("View Transaction");
    this.dialog.open(ViewtransactionComponent,{
      width:'70%'
    });
  }

  // openDialog() {
  //   this.dialog.open(PChildDailogComponent, {
  //     width: '30%',
  //   }).afterClosed().subscribe(val=>{
  //     if(val==='Save'){
  //       this.getAllChild();
  //     }
  //   });
  // }

  // editChild(row:any){
  //   this.dialog.open(PChildDailogComponent,{
  //   width:'30%',
  //   data:row
  //   }).afterClosed().subscribe(val=>{
  //     if(val=='update'){
  //       this.getAllChild();
  //     }
  //   });
  // }

  // deleteChild(id:number){
  //     this.api.deleteChild(id)
  //     .subscribe({
  //       next:(response)=>{
  //       alert("deleted Successfully !!");
  //       this.getAllChild();
  //       },
  //       error:()=>{
  //         alert("error while deleting the records");
  //       }
  //     });
  // }

  // getAllChild(){
  //   this.api.getChildData().
  //   subscribe({
  //     next:(response)=>{
  //       console.log(response);
  //       this.dataSource=new MatTableDataSource(response);
  //       this.dataSource.paginator= this.paginator;
  //       this.dataSource.sort=this.sort;
  //     },
  //     error:(error)=>{
  //     alert("Error while fatching Records !!");
  //     }
  //   });
  // }
  showApproveChild(){
    this.api.showApproveChild().subscribe({
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

  viewTransaction(id:any){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
