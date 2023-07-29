import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];

  private static baseUrl : string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  productList(){
    return this.http.get<Product[]>(ProductService.baseUrl + "/products");
  }

  remove(id:number){
    this.http.delete(ProductService.baseUrl + "/products/" +id).subscribe();
  }

  update(products : Product){
    this.http.put(ProductService.baseUrl + "/products/"+products.productId,products).subscribe(data => data = products)
  }

  addProduct(product : Product){
    this.http.post(ProductService.baseUrl + "/products",product).subscribe(data => data = product)
  }
}
