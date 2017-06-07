import { Component, OnInit } from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html'
})
export class SimpleFormComponent implements OnInit {
  products: Product[]
  isVisible = true;

  constructor() { 
    this.products = []
  }

  ngOnInit() {
  }

  onSubmit(product: any) {
    console.log(product);
    this.products.push(product);
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }

}
