import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { TokenService } from '../shared/token.service';
import { AuthService } from '../shared/auth.service';
import { AuthStateService } from '../shared/auth-state.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
// logout(){

//     this.router.navigate(['']);
  
// }
signOut() {
  this.auth.setAuthState(false);
  this.token.removeToken();
  this.router.navigate(['']);
}
Back_to_dashboard(){
  this.router.navigate(['dashboard']);
}

}
