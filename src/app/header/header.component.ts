import { Component,EventEmitter,Output, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
logout(){

    this.router.navigate(['']);
  
}
}
