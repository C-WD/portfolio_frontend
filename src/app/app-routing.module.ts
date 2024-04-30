import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./pages/home/home.module').then((homeModule)=>homeModule.HomeModule)
  },
  {
    path:'sobre',
    loadChildren:()=>import('./pages/sobre/sobre.module').then((sobreModule)=>sobreModule.SobreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
