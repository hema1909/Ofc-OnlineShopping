import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Product[] = [];

  constructor(private cart : CartService){
    this.products = JSON.parse(localStorage.getItem("Products") || "")
    this.products = cart.getCart();
    // this.cart.getCart().subscribe(data => this.products = data)
  }
  ngOnInit(): void {
    this.products = this.cart.getCart();
    // this.cart.getCart().subscribe(data => this.products = data)
  }

  delete(index:number){
  let ans = confirm("Are you sure you want to delete?")
  if(ans){
    this.cart.remove(index)
  }
  }

}
