import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // credentials : Customer[]=[];
  customer : Customer = new Customer();
  
  private static baseUrl : string = "http://localhost:3000";
  constructor(private http :HttpClient) {
    // this.http.get<Customer[]>(LoginService.baseUrl+"/customer").subscribe(data => this.credentials = data);
   }

   async validate(cred : Customer ) {
    return await this.http.get<Customer[]>(LoginService.baseUrl+"/customer?email=" + cred.email + "&password=" + cred.password).pipe(retry(1));
}
}
