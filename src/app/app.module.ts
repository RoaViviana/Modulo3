import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { Proyecto1Component } from './componente/proyecto1/proyecto1.component';
import { Proyecto2Component } from './componente/proyecto2/proyecto2.component';
import { Proyecto3Component } from './componente/proyecto3/proyecto3.component';
import { HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    Proyecto1Component,
    Proyecto2Component,
    Proyecto3Component
  ],
  imports:[
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
