import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { GuitaristsComponent } from './guitarists/guitarists.component';
import { GuitaristDetailsComponent } from './guitarist-details/guitarist-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitaristsComponent,
    GuitaristDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
