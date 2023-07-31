import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer : Customer[] = [];
  private static baseUrl : string = "http://localhost:3000";

  constructor(private http:HttpClient) { }


  customerList(){
    return this.http.get<Customer[]>(CustomerService.baseUrl + "/customer/");
  }
}
