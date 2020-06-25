import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-bottom-details',
  templateUrl: './product-bottom-details.component.html',
  styleUrls: ['./product-bottom-details.component.css']
})
export class ProductBottomDetailsComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
