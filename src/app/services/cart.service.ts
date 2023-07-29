import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingcart : Product[]  = [];

  // private static baseUrl : string = "http://localhost:3000";

  constructor() { }

  addToCart(prod : Product) {
    this.shoppingcart.push(prod);
    // this.http.post(CartService.baseUrl + "/products",prod).subscribe(data => data = prod)
  }

  getCart() {
    return this.shoppingcart;
    // return this.http.get<Product[]>(CartService.baseUrl + "/products");
  }

  remove(id: number){
    this.shoppingcart.splice(id , 1);
  }

//   public updateItemAmount(item: Product, newAmount: number) {
//     this..forEach((cartItem) => {
//       if (cartItem.product.id === item.product.id) {
//         cartItem.amount = newAmount;
//       }
//     });
//     this.itemsChanged.emit(this.cartItems.slice());}
}
