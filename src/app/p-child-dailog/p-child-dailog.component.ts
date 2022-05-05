import { Component, OnInit, Inject } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
// import { MyErrorStateMatcher } from '../dialog/dialog.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-p-child-dailog',
  templateUrl: './p-child-dailog.component.html',
  styleUrls: ['./p-child-dailog.component.css']
})
export class PChildDailogComponent implements OnInit {

  // selectedValue: string;

  // gender: Gender[] = [
  //   {value: 'male-0', viewValue: 'Male'},
  //   {value: 'female-1', viewValue: 'Female'},
  //   {value: 'others-2', viewValue: 'Others'},
  // ];

  // fnameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // lnameFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // phone_numberFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // panFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // limitFormControl:any = new FormControl('', [Validators.required, Validators.required]);
  // genderFormControl:any = new FormControl('', [Validators.required, Validators.required]);

  // matcher = new MyErrorStateMatcher();

  

  //should be like your form name
  childForm !: FormGroup;

  actionBtn: string = 'Save'
  errors: any=null;
  
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PChildDailogComponent>) { }

  ngOnInit(): void {
    this.childForm = this.formBuilder.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'dob': ['', Validators.required],
      'email': ['', Validators.required],
      'gender': ['', Validators.required],
      'phone_number': ['', Validators.required],
      'monthly_limit': ['', Validators.required]
    })
    // if (this.editData) {
    //   this.actionBtn = 'update'
    //   this.childForm.controls['fName'].setValue(this.editData.fName);
    //   this.childForm.controls['lName'].setValue(this.editData.lName);
    //   this.childForm.controls['date'].setValue(this.editData.date);
    //   this.childForm.controls['email'].setValue(this.editData.email);
    //   this.childForm.controls['gender'].setValue(this.editData.gender);
    //   this.childForm.controls['phone_number'].setValue(this.editData.phone_number);
    //   this.childForm.controls['monthly_limits'].setValue(this.editData.monthly_limits);

    // }

  }
  // addChild() {
  //   // console.log(this.productForm.value);Best Laptop !
  //   if (!this.editData) {
  //     if (this.childForm.valid) {
  //       this.api.postChildData(this.childForm.value)
  //         .subscribe({
  //           // next is the observer type
  //           next: (response) => {
  //             alert("Child Added !!!");
  //             this.childForm.reset();
  //             this.dialogRef.close("Save");
  //           },
  //           error: () => {
  //             alert('Error While Adding a child  !!! ');
  //           }
  //         });
  //     }
  //   }
  //   else {
  //     this.updateChild();
  //   }


  // }
  // updateChild() {
  //   return this.api.putChild(this.childForm.value, this.editData.id)
  //     .subscribe({
  //       next: (response) => {
  //         alert("data updated Succcessfully !!");
  //         this.childForm.reset();
  //         this.dialogRef.close("update");
  //       },
  //       error: () => {
  //         alert("Error While Update");
  //       }
  //     });
  // }



  addchild(){
    console.log(this.childForm.value);
this.api.postchilddata(this.childForm.value).subscribe({
next :(response) => {
console.log(response);
alert('Child Added Successfullly');
},
error:(error)=>{
}
})


}
}

