import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Product} from './product.model'

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html'
})
export class SimpleFormComponent implements OnInit {
  products: Product[]
  isVisible = true;
  twdbData: string;

  constructor() { 
    this.products = [];
    this.twdbData = "This is from model!";
  }

  ngOnInit() {
  }

  onSubmit(product: Product, form: NgForm) {
    console.log(product);
    this.products.push(product);

    form.reset();
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }

}
