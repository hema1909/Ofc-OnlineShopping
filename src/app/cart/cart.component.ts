import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Product[] = [];
  product : Product = new Product();
  quantity : number = 1;
  email : string = "";
  password : string = "";
  grandTotal : number =  0;
  count : number = 0 ;

  constructor(private cart : CartService, private router:Router){
    // let cust : Customer = JSON.parse(localStorage.getItem("Customer")||"");
    // this.product = JSON.parse(localStorage.getItem("Item") || "")
    if(localStorage.getItem("Customer") == null)
      this.router.navigate(["/login"])
    this.products = cart.getCart();
    this.grandTotal = this.cart.getTotalPrice();
    
  }
  ngOnInit(): void {
    this.products = this.cart.getCart();
    
  }

  delete(index:number){
  let ans = confirm("Are you sure you want to delete?")
  if(ans){
    this.cart.removeCartItem(index)
  }
  }

  increaseCount(id:number) {
    this.quantity++
    for(var i of this.products){
      localStorage.setItem("Products", JSON.stringify(this.products[id]))
    this.grandTotal = i.price*this.quantity
    }
    
  }

   decreaseCount(id:number) {
    this.quantity--;
    localStorage.setItem("Products", JSON.stringify(this.products[id]))
    this.grandTotal = this.products[id].price*this.quantity
  }

  login(){
    this.email = localStorage.getItem("email") || "";
    this.password = localStorage.getItem("password") || "";
    alert(this.email)
    if(this.email == "" && this.password == "" && localStorage.getItem("Products") != ""){
      this.router.navigate(["/login"])
    }
    // else if(localStorage.getItem("Products") != "" ){
    //   this.router.navigate(["/cart"])
    // }
    else{
    this.router.navigate(["/payment"])
    }
  }

  emptyCart(){
    this.cart.removeAllCart();
  }

}
