import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContatoComponent,

  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
