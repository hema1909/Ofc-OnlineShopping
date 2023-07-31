import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { Order } from '../order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  customer : Customer = new Customer();
  cust : Customer = new Customer();
  orders:Order[]=[];

  constructor(private service:OrderService) {
    this.customer = JSON.parse(localStorage.getItem("Customer") || "")
    this.cust = JSON.parse(localStorage.getItem("Item") || "")
    this.orders = this.cust.orders;
    this.orders = this.customer.orders;
  }

  ngOnInit(): void {
    
  }


}
