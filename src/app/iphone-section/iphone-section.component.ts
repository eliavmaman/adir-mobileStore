import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-iphone-section',
  templateUrl: './iphone-section.component.html',
  styleUrls: ['./iphone-section.component.css']
})
export class IphoneSectionComponent implements OnInit {
  products: Product[] = [
    {name: 'iPhone', description: 'This is a new Iphone', price: 1500, image: 'assets/images/iphone.png'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
