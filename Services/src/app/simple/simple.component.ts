import { Component, OnInit } from '@angular/core';
import {SimpleClick} from '../services/simple-click.service'

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  providers: [SimpleClick]
})
export class SimpleComponent implements OnInit {

  constructor(private simpleClick: SimpleClick) { }

  ngOnInit() {
  }

  alertThroughService():void{
    this.simpleClick.doAlert();
  }

}
