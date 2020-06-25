import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-product-right-details',
  templateUrl: './product-right-details.component.html',
  styleUrls: ['./product-right-details.component.css']
})
export class ProductRightDetailsComponent implements OnInit {
  @Input() product: Product;
  @Input() left = false;

  constructor() {
  }

  ngOnInit() {
  }

}
