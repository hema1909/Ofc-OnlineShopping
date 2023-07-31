import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {

  constructor(private router: Router){}

  goToHome(){
    this.router.navigate(["/home"])
  }

  orderSummary(){
    this.router.navigate(["/order"])
  }

}
