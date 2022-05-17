import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class User {
  name!: string;
  email!:string;
  password!: string;
  password_confirmation!: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  // User registration
  register(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/register', user);


  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }
  logoutUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/logout');
  }

  _isLogedIn(){
    // console.log(!!localStorage.getItem('auth_token'));
    return !!localStorage.getItem('auth_token');
    // return false;
   }
   sendEmail(email:any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/sendPasswordResetLink', email);
  }
  passwordResetProcess(email:any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/resetPassword', email);
  }
  resetPassword(user:User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/resetPassword', user);
  }
}
