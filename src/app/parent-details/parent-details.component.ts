import { Component, OnInit, ViewChild } from '@angular/core';
import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import { MyDashboardComponent } from '../my-dashboard/my-dashboard.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../shared/auth.service';
import { NgToastService } from 'ng-angular-popup';

import { PUserDailogComponent } from '../p-user-dailog/p-user-dailog.component';

export class User {
  name: any;
  email: any;
}
@Component({
  selector: 'app-parent-details',
  templateUrl: './parent-details.component.html',
  styleUrls: ['./parent-details.component.css']
})

export class ParentDetailsComponent implements OnInit {
  status: any= false;
  displayedColumns: string[] = ['id','name', 'email','phone_number','address', 'pan_card','gender', 'is_approved'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  UserProfile!: User;

  constructor(private dialog: MatDialog, public api : ApiService,private breakpointObserver: BreakpointObserver,
    public authService: AuthService, public toast:NgToastService) {
        this.authService.profileUser().subscribe((data: any) => {
          this.UserProfile = data;
        });
   }

  ngOnInit(): void {
    this.requestKyc();

  }

  openpuserDailog(){
    this.status=true;
    this.dialog.open(PUserDailogComponent,{
      width:'30%'
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

  // getAllChild()
  // {
  //   this.api.getChildData().
  //   subscribe({
  //     next:(response)=>{
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
  requestKyc(){
    this.api.showParentDetails().subscribe({
      next:(response)=>{
        this.toast.success({detail:"Success Message",summary:"Parent Details Fatch Successfully !!",duration:5000})
        this.dataSource= new MatTableDataSource(response);
        console.log(this.dataSource);
      },
      error:(error)=>{
        this.toast.info({detail:"info Message",summary:"Something wrong while fatching data of Parent !!",duration:5000})

        // console.log("Error while fetching Records !! ");
        // alert("Error while fetching Records !! ");
      }
    });
  }
}
