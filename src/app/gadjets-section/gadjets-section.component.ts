import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-gadjets-section',
  templateUrl: './gadjets-section.component.html',
  styleUrls: ['./gadjets-section.component.css']
})
export class GadjetsSectionComponent implements OnInit {
  products: Product[] = [
    {name: 'Watch', description: 'This is a new Apple Watch', price: 500, image: 'assets/images/watch.jpeg'},
    {name: 'Apple TV', description: 'This is Apple TV', price: 900, image: 'assets/images/tv.jpeg'}

  ];
  constructor() { }

  ngOnInit() {
  }

}
