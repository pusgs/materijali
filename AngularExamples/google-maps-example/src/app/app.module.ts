import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //prilikom importa mape dajemo Google API key koji dobijamo preko google konzole
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
