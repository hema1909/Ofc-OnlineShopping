import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public slides = [
    {
      src: 'assets/images/slide1.jpg',
    },
    {
      src: 'assets/images/slide1.jpg',
    },
    {
      src: 'assets/images/slide1.jpg',
    },
  ];

  public currentSlideIndex = 0;
}
