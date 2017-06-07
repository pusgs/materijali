import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {
  RouterModule,
  Routes
} from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


const ChildRoutes = [
   {path: "child1", component: Child1Component},
   {path: "child2", component: Child2Component}
  ]

const Routes = [
  {path: "home", component: HomeComponent, children: ChildRoutes},
  {path: "about/:Id", component: AboutComponent},
  {path: "other", redirectTo:"home"},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
