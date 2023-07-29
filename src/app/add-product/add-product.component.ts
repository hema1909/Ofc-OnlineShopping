import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product : Product = new Product();

  brand : string[] = ["Apple", "SAMSUNG","REDMI","REALME", "ONEPLUS"];

  constructor(private service:ProductService , private router: Router){}

  save(){
    this.service.addProduct(this.product);
    this.router.navigate(["/admin"])
  }

}
