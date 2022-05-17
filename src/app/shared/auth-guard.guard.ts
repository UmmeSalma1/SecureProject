


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private auth : AuthService, private route:Router, private toast : NgToastService){

  }
  canActivate()
    {
      if(this.auth._isLogedIn()){
        return true;
      }else{
        // alert("You have to login First ");
      this.toast.warning({detail:"Warning Message",summary:"Login First Go to Dashbaord !!",duration:5000})

      this.route.navigate(['/']);
      return false;
      }
    // return true;
  }

}

