import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';

import { Product } from '../product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
products: Product[]

  ngOnInit() {
  }

}
