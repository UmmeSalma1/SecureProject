import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:string= "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  adminDetails(): Observable<any> {
    return this.http.get<any>(this.baseurl+'/admin');
  }

  requestKyc(): Observable<any>{
    return this.http.get<any>(this.baseurl+'/admin/request-status');
  }
  approve(id:any):Observable<any>{
    return this.http.get<any>(this.baseurl+'/admin/approve/'+id);
  }

}
