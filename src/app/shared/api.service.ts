import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/addchild';

  baseurl:string= "http://127.0.0.1:8000/api";
  // post product data
  postChildData(data: any) {
    return this.http.post<any>(this.url, data);
  }

  //get product data
  getChildData() {
    return this.http.get<any>(this.url);
  }

  putChild(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/addchild/" + id, data);
  }


  deleteChild(id: number) {
    return this.http.delete<any>("http://localhost:3000/addchild/" + id)
  }
  postparentdata(user: any): Observable<any> {
    return this.http.post<any>(this.baseurl+'/api/parent/save', user);
  }

  postchilddata(user: any): Observable<any> {
    return this.http.post<any>(this.baseurl+'/api/parent/child', user);
  }
  showParentDetails(): Observable<any>{
    return this.http.get<any>(this.baseurl+'/admin/approval');
  }




}
