import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpProductService } from '../services/http.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [HttpProductService]
})
export class ProductComponent implements OnInit {
  
  products : Object [];

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit() {
    this.httpProductService.getProducts().subscribe(
      (prod: any) => {this.products = prod; console.log(this.products)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
  }

  addProduct() : void{
    this.httpProductService.postProduct().subscribe(this.onPost)
  }

  onPost(res : any) : void{
    alert("Post!");
    console.log(res.json());
  }

}
