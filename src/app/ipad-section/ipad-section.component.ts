import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-ipad-section',
  templateUrl: './ipad-section.component.html',
  styleUrls: ['./ipad-section.component.css']
})
export class IpadSectionComponent implements OnInit {
  products: Product[] = [
    {name: 'iPad', description: 'This is a new Ipad', price: 500, image: 'assets/images/ipad.jpg'},
    {name: 'Ipad 12.9"', description: 'Ipad 12.9"', price: 900, image: 'assets/images/ipad_129.jpg'},
    {name: 'Ipad Air', description: 'This is Ipad Air', price: 700, image: 'assets/images/ipadair.jpg'},
    {name: 'Ipad Mini', description: 'This is Ipad Mini', price: 400, image: 'assets/images/ipadmini.jpg'},
    {name: 'Ipad Pro', description: 'This is Ipad Pro', price: 400, image: 'assets/images/ipadpro.jpg'}

  ];
  constructor() { }

  ngOnInit() {
  }

}
