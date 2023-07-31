import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Customer } from '../customer.model';
import { Order } from '../order.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  cred : Customer = new Customer();
  orders : Order[] =[];

  shoppingcart : Product[] = [];

  constructor(private service:ProductService,
    private router: Router,
    private cart : CartService){}


  ngOnInit(): void {
    this.service.productList().subscribe(data => this.products = data)
  }

  addToCart(id: number){
    alert(this.products[id].productId)
    localStorage.setItem("Item", JSON.stringify(this.products[id]))
    this.cart.addToCart(this.products[id]);
    this.router.navigate(["/cart"])
  }
  

}
