import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { TiendaComponent } from './tienda/tienda.component';
import { FacturaComponent } from './factura/factura.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { MaterialModule } from './material/material.module';
import { TiendaMainComponent } from './tienda/tienda-main/tienda-main.component';
import { ModalDetailComponent } from './tienda/modal-detail/modal-detail.component';
import { DetailBillComponent } from './tienda/detail-bill/detail-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    TiendaComponent,
    FacturaComponent,
    FormLoginComponent,
    TiendaMainComponent,
    ModalDetailComponent,
    DetailBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDetailComponent]
})
export class AppModule { }