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
    this.httpProductService.getProducts().subscribe((res: Response) => {this.products = res.json(); console.log(this.products)});
  }

  addProduct() : void{
    this.httpProductService.postProduct().subscribe(this.onPost)
  }

  onPost(res : any) : void{
    alert("Post!");
    console.log(res.json());
  }

}
