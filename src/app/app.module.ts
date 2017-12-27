import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { GuitaristsComponent } from './guitarists/guitarists.component';
import { GuitaristDetailsComponent } from './guitarist-details/guitarist-details.component';
import {GuitaristService} from './guitarist.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitaristsComponent,
    GuitaristDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GuitaristService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
