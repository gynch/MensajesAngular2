import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AbueloComponent } from './abuelo/abuelo.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { TioComponent } from './tio/tio.component';


@NgModule({
  declarations: [
    AppComponent,
    AbueloComponent,
    PadreComponent,
    HijoComponent,
    TioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
