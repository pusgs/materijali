import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  Id: string = "-1";

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {this.Id = params["Id"]});
   }

  ngOnInit() {
  }

}
