import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm !: FormGroup;
  constructor(public router: Router,
    private formBuilder: FormBuilder,
    private api: ApiService,) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      'email': ['', Validators.required],

    })
  }

  forgetDailog(){
    console.log(this.forgetPasswordForm.value);
    this.router.navigate(['forgetpopup']);
  }
}
