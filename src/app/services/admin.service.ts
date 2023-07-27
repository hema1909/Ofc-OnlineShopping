import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  products : Product[] = [];
  private static baseUrl : string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  addProducts(product : Product ){
    this.http.post(AdminService.baseUrl + "/customer/" ,product).subscribe(data => data = product)
  }
  
}
