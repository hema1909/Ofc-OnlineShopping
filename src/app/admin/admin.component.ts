import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  products : Product[] = [];
 

  constructor(private service:ProductService , private router:Router){}
  ngOnInit(): void {
    this.service.productList().subscribe(data => this.products = data)
  }

  delete(index : number){
    let ans = confirm("Are you sure you want to delete?");
    if(ans)
      this.service.remove(index);
  }

  edit(id: number){
    alert(this.products[id].productId)
    localStorage.setItem("Products", JSON.stringify(this.products[id]))
   
    this.router.navigate(["/edit"]);
}

addProduct(){
  this.router.navigate(["/addproduct"])
}
}
