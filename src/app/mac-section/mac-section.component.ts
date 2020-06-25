import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-mac-section',
  templateUrl: './mac-section.component.html',
  styleUrls: ['./mac-section.component.css']
})
export class MacSectionComponent implements OnInit {
  products: Product[] = [
    {name: 'Macbook', description: 'This is a Mac computer', price: 2200, image: 'assets/images/mac.jpg'},
    {
      name: 'Macbook Pro',
      description: 'This is a new  Macbook Pro',
      price: 2200,
      image: 'assets/images/macbookpro.jpg'
    },
    {name: 'Macbook Air', description: 'This is a Macbook Air', price: 2200, image: 'assets/images/macbook_air.png'},
    {
      name: 'Macbook Very old',
      description: 'This is a very very  old  Macbook',
      price: 300,
      image: 'assets/images/veryoldmac.png'
    }

  ];

  constructor() {

  }

  ngOnInit() {
  }

}
