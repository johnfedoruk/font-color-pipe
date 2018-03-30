import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FontColorModule } from '../../public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontColorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
