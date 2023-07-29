import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  product : Product = new Product();
  brand : string[] = ["Apple", "SAMSUNG","REDMI","REALME","ONEPLUS"];

  constructor(private service:ProductService , private router: Router){
    this.product = JSON.parse(localStorage.getItem("Products") || "")
  }

  update(){
    this.service.update(this.product);
    this.router.navigate(["/admin"])
  }

}
