import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';
import { Order } from '../order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  customers:Customer=new Customer();
  order:Order[]=[];
  private static baseUrl: string="http://localhost:3000";

  constructor(private http:HttpClient) { }


  list(odr: Order){
    this.order.push(odr)
  }

  getorders(){
    return this.order
  }
}
