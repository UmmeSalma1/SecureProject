import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private toast: NgToastService) { }

  ngOnInit(): void {
  }

  importantLink(){
    this.toast.success({detail:"success Message",summary:"FrontEnd And Integration Done  By Salma",duration:5000})
  }
}
