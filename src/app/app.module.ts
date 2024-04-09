import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ServicoCardComponent } from './components/servico-card/servico-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    HomeComponent,
    ServicosComponent,
    ServicoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
