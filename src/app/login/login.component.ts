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
  flag : boolean = false;

  constructor(private service:LoginService, private router: Router){
    localStorage.clear();
  }

  authenticate(){
    this.flag = this.service.validate(this.cred);
    if(this.flag){
      // localStorage.setItem("username", this.cred.customerName);
      // localStorage.setItem("password", this.cred.password)
        this.router.navigate(["/admin"]);
      }else {
        this.router.navigate(["/home"]);
      }
    }
}


