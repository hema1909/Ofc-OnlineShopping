import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingcart : Product[]  = [];
  public productList = new BehaviorSubject<any>([]);


  constructor() { }

  addToCart(prod : Product) {
    this.shoppingcart.push(prod);
    this.getTotalPrice();
  }

  getCart() {
    return this.shoppingcart;
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.shoppingcart.map((a:any)=>{
      grandTotal +=a.price;
    })
    return grandTotal;
  }

  removeCartItem(id: number){
    this.shoppingcart.splice(id , 1);
  }


  removeAllCart(){
    this.shoppingcart = []
    this.productList.next(this.shoppingcart)
  }
}
