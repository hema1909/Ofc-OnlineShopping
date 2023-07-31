import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  cred : Customer = new Customer() ;
  customers : Customer[] = [];
  customer : Customer = new Customer();

  constructor(private service:LoginService, private router: Router){
    // localStorage.clear();
  }

  authenticate(){
    this.service.validate(this.cred).then(response => response.subscribe(data => this.customer = data[0]));
    if(this.cred.email == "Admin" && this.cred.password == "admin"){
      this.router.navigate(["/admin"]);
    } else if(this.customer.customerName.length > 0) {
        alert(this.customer)
        localStorage.setItem("Customer", JSON.stringify(this.customer))
        if(localStorage.getItem("Item") != null)
          this.router.navigate(["/cart"]);
        else
          this.router.navigate(["/order"]);
    } else {
      this.router.navigate(["/login"]);
    }

    localStorage.setItem("email", this.cred.email);
    localStorage.setItem("password", this.cred.password)
    // localStorage.setItem("Orders",JSON.stringify(this.))
    // localStorage.setItem("Orders",JSON.stringify(this.cred.orders[id])) 
    }
}


