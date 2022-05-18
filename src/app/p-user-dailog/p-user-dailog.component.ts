import { Component, OnInit, Inject } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
// import { MyErrorStateMatcher } from '../dialog/dialog.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../shared/auth.service';
import { NgToastService } from 'ng-angular-popup';
// import { ParentDetailsComponent } from '../parent-details/parent-details.component';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
interface Gender {
  value: string;
  viewValue: string;
}

// User interface
export class User {
  id:any
  name: any;
  email: any;
}

@Component({
  selector: 'app-p-user-dailog',
  templateUrl: './p-user-dailog.component.html',
  styleUrls: ['./p-user-dailog.component.css']
})
export class PUserDailogComponent implements OnInit {

  // selectedValue: string;

  // gender: Gender[] = [
  //   {value: 'male-0', viewValue: 'Male'},
  //   {value: 'female-1', viewValue: 'Female'},
  //   {value: 'others-2', viewValue: 'Others'},
  // ];

  // nameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // phone_numberFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // panFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // addressFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // genderFormControl:any = new FormControl('', [Validators.required, Validators.required]);

  // matcher = new MyErrorStateMatcher();
  // parentForm:FormGroup;

  parentForm !: FormGroup;

  actionBtn: string = 'Verify'
  errors: any=null;

  UserProfile!: User;


  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PUserDailogComponent>, private breakpointObserver: BreakpointObserver,
    public authService: AuthService, private toast:NgToastService ) {
      this.authService.profileUser().subscribe((data: any) => {
        this.UserProfile = data;
      });
    }

  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      // password: ['', Validators.required],
      // date: ['', Validators.required],
      gender: ['', Validators.required],
      phone_number: ['', Validators.required],
      pan_card: ['', Validators.required],
      address: ['', Validators.required]
    })
  }
    // if (this.editData) {
    //   this.actionBtn = 'update'
    //   this.parentForm.controls['name'].setValue(this.editData.name);
    //   this.parentForm.controls['email'].setValue(this.editData.email);
    //   this.parentForm.controls['password'].setValue(this.editData.password);
    //   this.parentForm.controls['date'].setValue(this.editData.date);
    //   this.parentForm.controls['gender'].setValue(this.editData.gender);
    //   this.parentForm.controls['phone_number'].setValue(this.editData.phone_number);
    //   this.parentForm.controls['pan_card'].setValue(this.editData.pan_card);
    //   this.parentForm.controls['address'].setValue(this.editData.address);
    // }
  // addparent() {
  //   // console.log(this.productForm.value);Best Laptop !
  //   // this.p.status= true;
  //   if (!this.editData) {
  //     if (this.parentForm.valid) {
  //       this.api.poststoreData(this.parentForm.value)
  //         .subscribe({
  //           // next is the observer type
  //           next: (response) => {
  //             alert("KYC is done !!!");
  //             this.parentForm.reset();
  //             this.dialogRef.close("Save");
  //           },
  //           error: () => {
  //             alert('Error While verifying  !!! ');
  //           }
  //         });
  //     }
  //   }
  //   else {
  //     this.updateChild();
  //   }


  // }
  // updateChild() {
  //   return this.api.putChild(this.parentForm.value, this.editData.id)
  //     .subscribe({
  //       next: (response) => {
  //         alert("data updated Succcessfully !!");
  //         this.parentForm.reset();
  //         this.dialogRef.close("update");
  //       },
  //       error: () => {
  //         alert("Error While Update");
  //       }
  //     });
  // }

  addparent(){
    // console.log(this.parentForm.value);
    // alert(this.UserProfile.id);
  this.parentForm.controls['id'].setValue(this.UserProfile?.id);
console.log(this.parentForm.value);
this.api.postparentdata(this.parentForm.value).subscribe(
(result: any) => {
console.log(result);
// alert('kyc is done');
this.toast.success({detail:"Success Message",summary:"KycRequest Send Succcessfully !!",duration:3000})

this.dialogRef.close("Verify");
},
(error: any) => {
  this.toast.error({detail:"Fail Message",summary:"Something wrong ,Please Try Again Later !!",duration:3000})
this.errors = error.error;
},
() => {
this.parentForm.reset();
}
);

}
  }

