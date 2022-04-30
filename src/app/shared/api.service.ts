import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/addchild';

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
}
