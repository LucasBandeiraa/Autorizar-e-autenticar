import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroGerentesComponent } from './cadastro-gerentes/cadastro-gerentes.component';
import { GerentesComponent } from './gerentes/gerentes.component';
import { AtivosComponent } from './ativos/ativos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroGerentesComponent,
    GerentesComponent,
    AtivosComponent,
    NavBarComponent,
    ClientesComponent,
    CadastroClientesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
