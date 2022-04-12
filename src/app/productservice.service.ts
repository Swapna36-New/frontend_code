import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8083/api/v1/products';

  getProductsList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  
  

}
