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

  reshnessList: string[] = ["Brand New", "Second Hand", "Refurbished"];

  //should be like your form name
  productForm !: FormGroup;

  actionBtn: string = 'Save'
  
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PChildDailogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      productPrice: ['', Validators.required],
      comment: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = 'update'
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['productPrice'].setValue(this.editData.productPrice);
      this.productForm.controls['comment'].setValue(this.editData.comment);

    }

  }
  addProduct() {
    // console.log(this.productForm.value);Best Laptop !
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProductData(this.productForm.value)
          .subscribe({
            // next is the observer type
            next: (response) => {
              alert("Product Added !!!");
              this.productForm.reset();
              this.dialogRef.close("Save");
            },
            error: () => {
              alert('Error While Added Product !!! ');
            }
          });
      }
    }
    else {
      this.updateProduct();
    }


  }
  updateProduct() {
    return this.api.putProduct(this.productForm.value, this.editData.id)
      .subscribe({
        next: (response) => {
          alert("data updated Succcessfully !!");
          this.productForm.reset();
          this.dialogRef.close("update");
        },
        error: () => {
          alert("Error While Update");
        }
      });
  }


}
