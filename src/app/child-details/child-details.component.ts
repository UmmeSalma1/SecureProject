import { Component, OnInit, ViewChild } from '@angular/core';
import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

import {MatTableDataSource} from '@angular/material/table';
import { ViewtransactionComponent } from '../viewtransaction/viewtransaction.component';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../shared/auth.service';

export class User {
  id:any
  name: any;
  email: any;
}

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

  UserProfile!: User;

  constructor(private dialog: MatDialog, public api : ApiService,private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PChildDailogComponent>, private toast:NgToastService, private auth : AuthService) {
      this.auth.profileUser().subscribe((data: any) => {
        this.UserProfile = data;
      });

  }

  showForm !: FormGroup;

  id: any ;

  ngOnInit(): void {
    this.showForm = this.formBuilder.group({
      'id': ['',Validators.required],
    })
    // this.showApproveChild();
    // let objView = new ViewtransactionComponent();
  }

  openadd_childDailog(){
    this.dialog.open(PChildDailogComponent,{
      width:'30%'
    });
  }

  opentransactionDailog(id:any){
    console.log("initial" + id);
    // this.userid = id;
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

  showchild()
  {
      this.showForm.controls['id'].setValue(this.UserProfile?.id);
      // this.showForm.controls['id'].value;
      this.id = this.showForm.controls['id'].value;
      this.showApproveChild(this.id);
    // alert(this.showForm.controls['id'].value);
    // alert(this.id);
  }

  showApproveChild(id:any){
    this.api.showApproveChild(id).subscribe({
      next:(response)=>{
        this.toast.success({detail:"Success Message",summary:"Show Child Details",duration:5000})
        this.dataSource= new MatTableDataSource(response);
        console.log(response);
        console.log(this.dataSource);
      },
      error:(error)=>{
        console.log("Error while fetching Records !! ");
        // alert("Error while fetching Records !! ");
        this.toast.warning({detail:"warning Message",summary:"Something wrong while fetching data !!",duration:5000})

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
}
