import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-forget-password-dailog',
  templateUrl: './forget-password-dailog.component.html',
  styleUrls: ['./forget-password-dailog.component.css']
})
export class ForgetPasswordDailogComponent implements OnInit {
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;
  constructor(public router: Router, private toast:NgToastService) { }

  ngOnInit(): void {
  }
  goback(){
    this.router.navigate(['forgetPassword']);
  }
  resendlink(){
    this.toast.success({detail:"Success Message",summary:" We Send a Mail Again Check your mail  !!",duration:5000})
  }
}
