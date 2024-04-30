import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SobreRoute } from './sobre.routing';
import { SobreComponentComponent } from '../../components/sobre-component/sobre-component.component';
import { BiografiaComponent } from '../../components/biografia/biografia.component';
import { SobreComponent } from './sobre.component';



@NgModule({
  declarations: [
SobreComponentComponent,
SobreComponent,
BiografiaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SobreRoute),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SobreModule { }
