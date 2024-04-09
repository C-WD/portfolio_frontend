import { Component } from '@angular/core';
import { Servico } from '../../models/servico.interface';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {
  public servicos: Servico[] = [
    {
      imagem: "assets/example01.png",
      titulo: "Product design",
      texto: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      imagem: "assets/example02.png",
      titulo: "Art direction",
      texto: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      imagem: "assets/example03.png",
      titulo: "Visual design",
      texto: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
  ]
}
