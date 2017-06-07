import { Component, OnInit } from '@angular/core';
import { SimpleData } from '../services/simple-data.service'

@Component({
  selector: 'app-simple2',
  templateUrl: './simple2.component.html',
  styleUrls: ['./simple2.component.css']
})
export class Simple2Component implements OnInit {

  data : string [];

  constructor( private simpleData: SimpleData) { }

  ngOnInit() {
    this.data = this.simpleData.fetchData();
  }

}
