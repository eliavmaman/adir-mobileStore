import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-music-section',
  templateUrl: './music-section.component.html',
  styleUrls: ['./music-section.component.css']
})
export class MusicSectionComponent implements OnInit {
  products: Product[] = [
    {name: 'HomePod', description: 'This is a new Apple HomePod', price: 500, image: 'assets/images/homepod.jpg'},
    {name: 'Apple AirPods', description: 'This is Apple AirPods', price: 900, image: 'assets/images/airpods.jpg'},
    {name: 'Apple Ipod Touch', description: 'This is Apple Ipod Touch', price: 250, image: 'assets/images/ipod.jpg'}

  ];
  constructor() { }

  ngOnInit() {
  }

}
