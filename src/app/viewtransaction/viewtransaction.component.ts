import { Component, OnInit, ViewChild } from '@angular/core';
import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ChildDetailsComponent } from '../child-details/child-details.component';
@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent  implements OnInit  {
  displayedColumns: string[] = ['id','card_number', 'vendor_name',  'transaction_amount','limit_balance','transaction_date','transaction_status'];
  dataSource!: MatTableDataSource<any>;

  status :boolean = true;
  id:any='762631364920639489';

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, public api : ApiService) {
    console.log(this.id);
    // this.id=id;

   }

  ngOnInit(): void {
    this.showChildTransaction(this.id);

    }

  openadd_childDailog(){
    this.dialog.open(PChildDailogComponent,{
      width:'30%'
    });
  }


  showChildTransaction(id:any):void{
    this.api.showChildTransaction(id).subscribe({
      next:(response)=>{
        this.dataSource= new MatTableDataSource(response);
        console.log(response);
        // this.id = response;
        // console.log(this.id);
        // alert('Transaction has been fetched');

      },
      error:(error)=>{

        console.log("Error while fetching Records !! ");
        alert("Error while fetching Records !! ");
      }
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
  //       // console.log(response);
  //       this.dataSource=new MatTableDataSource(response);
  //       this.dataSource.paginator= this.paginator;
  //       this.dataSource.sort=this.sort;
  //     },
  //     error:(error)=>{
  //     alert("Error while fatching Records !!");
  //     }
  //   });
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
