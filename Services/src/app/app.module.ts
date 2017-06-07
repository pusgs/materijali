import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleData } from "./services/simple-data.service"

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { Simple2Component } from './simple2/simple2.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    Simple2Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SimpleData],
  bootstrap: [AppComponent]
})
export class AppModule { }
