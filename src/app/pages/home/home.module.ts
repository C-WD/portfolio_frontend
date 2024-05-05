import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRoute } from './home.routing';
import { ClienteComponent } from '../../components/cliente/cliente.component';
import { ClientesComponent } from '../../components/clientes/clientes.component';
import { ServicoCardComponent } from '../../components/servico-card/servico-card.component';
import { ServicosComponent } from '../../components/servicos/servicos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    ClienteComponent,
    ServicoCardComponent,
    ServicosComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
