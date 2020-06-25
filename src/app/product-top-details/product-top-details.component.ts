import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-product-top-details',
  templateUrl: './product-top-details.component.html',
  styleUrls: ['./product-top-details.component.css']
})
export class ProductTopDetailsComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
