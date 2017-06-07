import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';

  constructor(private authService: AuthService){
  }

  logIn(){
    this.authService.logIn();
  }

  logOut(){
    this.authService.logOut();
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }
}
