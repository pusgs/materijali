import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ProtectedComponent } from './protected/protected.component';

import { AuthService } from './services/auth.service';

import { LoggedInGuard } from './logged-in.guard'

const ChildRoutes = [
   {path: "child1", component: Child1Component},
   {path: "child2", component: Child2Component}
  ]

const Routes = [
  {path: "home", component: HomeComponent, children: ChildRoutes},
  {path: "protected", component: ProtectedComponent, canActivate: [LoggedInGuard]},
  {path: "about/:Id", component: AboutComponent},
  {path: "other", redirectTo:"home"},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Child1Component,
    Child2Component,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [AuthService, LoggedInGuard],//!LoggedInGuard also has to be included in providers!
  bootstrap: [AppComponent]
})
export class AppModule { }
