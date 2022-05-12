import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:string= "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  adminDetails(): Observable<any> {
    return this.http.get<any>(this.baseurl+'admin');
  }

  requestKyc(): Observable<any>{
    return this.http.get<any>(this.baseurl+'parents');
  }

  pendingStatus(): Observable<any>{
    return this.http.get<any>(this.baseurl+'pendingStatus');
  }

  approve(id:string):Observable<any>{
    return this.http.get<any>(this.baseurl+'admin/approve/'+id);
  }

  rejectParent(id:string):Observable<any>{
    return this.http.get<any>(this.baseurl+'admin/reject/'+id);
  }

  showParentDetails(): Observable<any>{
    return this.http.get<any>(this.baseurl+'parents');
  }

  showChildDetails(): Observable<any>{
    return this.http.get<any>(this.baseurl+'childs')
  }
  showPendingChild() : Observable<any>{
    return this.http.get<any>(this.baseurl+'childPendingStatus')
  }

  approveChild(id:string):Observable<any>{
    return this.http.get<any>(this.baseurl+'admin/childApprove/'+id);
  }

  childReject(id:string){
    return this.http.get<any>(this.baseurl+'admin/childReject/'+id);
  }
  showCardDetails(): Observable<any>{
    return this.http.get<any>(this.baseurl+'cards')
  }

  showTransactionDetails(): Observable<any>{
    return this.http.get<any>(this.baseurl+'transaction')
  }

  showVendorDetails(): Observable<any>{
    return this.http.get<any>(this.baseurl+'vendor')
  }

  showRefundDetails(): Observable<any>{
    return this.http.get<any>(this.baseurl+'refunds')
  }

  parentDelete(id:any): Observable<any>{
    return this.http.get<any>(this.baseurl+'parentDelete/'+id)
  }

  childDelete(id:any): Observable<any>{
    return this.http.get<any>(this.baseurl+'childDelete/'+id)
  }
  cardDelete(id:any): Observable<any>{
    return this.http.get<any>(this.baseurl+'cardDelete/'+id)
  }
  vendorDelete(id:any): Observable<any>{
    return this.http.get<any>(this.baseurl+'vendorDelete/'+id)
  }
  refundDelete(id:any): Observable<any>{
    return this.http.get<any>(this.baseurl+'refundDelete/'+id)
  }
}
