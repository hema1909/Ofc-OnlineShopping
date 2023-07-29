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
      // src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png',
    },
    {
      src: 'assets/images/slide1.jpg',
      // src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png',
    },
    {
      src: 'assets/images/slide1.jpg',
      // src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png',
    },
  ];

}
