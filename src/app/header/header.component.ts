import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { TokenService } from '../shared/token.service';
import { AuthService } from '../shared/auth.service';
import { AuthStateService } from '../shared/auth-state.service';
import { ApiService } from '../shared/api.service';
import { NgToastService } from 'ng-angular-popup';
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
    public token: TokenService,
    public authApi: AuthService, private toast:NgToastService) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
// logout(){

//     this.router.navigate(['']);

// }
signOut(){
this.authApi.logoutUser().subscribe ({
  next:(response)=>{
    this.toast.success({detail:"Success Message",summary:"Log Out Successflly  !!",duration:5000})
    // alert("Logged Out Succesfully");
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['']);
  },
  error:(error)=>{
    this.toast.info({detail:"info Message",summary:"Something Wrong ,Session Time Out Login Again !!",duration:5000})

  }
})
}


}
