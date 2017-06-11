import { Component } from '@angular/core';

import {MapInfo} from "./map/map-info.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google maps simple example';
  mapInfo: MapInfo

  constructor(){
    this.mapInfo = new MapInfo(45.242268, 19.842954, 
    "assets/ftn.png",
    "Jugodrvo" , "" , "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
  }
}
