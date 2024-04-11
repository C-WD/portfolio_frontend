import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ServicoCardComponent } from './components/servico-card/servico-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SobreComponent } from './pages/sobre/sobre.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { SobreComponentComponent } from './components/sobre-component/sobre-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicosComponent,
    ServicoCardComponent,
    HeaderComponent,
    ContatoComponent,
    SobreComponent,
    BiografiaComponent,
    SobreComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
