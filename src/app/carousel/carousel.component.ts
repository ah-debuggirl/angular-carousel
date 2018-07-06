import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: Array<string> = [
    'assets/images/cenart_portada.jpg',
    'assets/images/ollin.jpg',
    'assets/images/orquesta-sinfonica-de-mineria.jpg',
    'assets/images/sala-neza.jpg'
  ]

  constructor() { }

  ngOnInit() {
  }

}
