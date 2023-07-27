import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  credentials : Customer[]=[];
  private static baseUrl : string = "http://localhost:3000";
  constructor(private http :HttpClient) {
    this.http.get<Customer[]>(LoginService.baseUrl+"/customer").subscribe(data => this.credentials = data);
   }

   validate(cred : Customer ): boolean {
    return this.credentials.filter(c =>c.customerName == cred.customerName &&
     c.password == cred.password ).length == 1? true :false;
}
}
