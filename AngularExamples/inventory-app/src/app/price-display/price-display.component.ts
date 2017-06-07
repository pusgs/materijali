import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template:`<div class="price-display">\${{price}}</div>`,
})
export class PriceDisplayComponent implements OnInit {
  @Input () price: number

  constructor() { }

  ngOnInit() {
  }

}
