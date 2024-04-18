import { Component } from '@angular/core';
import { Biografia } from '../../models/biografia.interface';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  public biografias: Biografia[] = [
    {
      imagem: 'assets/devs/abmael.jpg',
      nome: "Abmael Souza",
      profissao: "Desenvolvedor Full Stack, Angular, Flutter, Node, Laravel",
      biografia: "Aoba!",
      alt: "Imagem do desenvolvedor",
      cor: "#f75700"
    },
    {
      imagem: 'assets/devs/gabriel.jpg',
      nome: "Gabriel Estéfono",
      profissao: "Desenvolvedor Full Stack, Angular, Next, Flutter, Nest, Node, Laravel, .NET, Vue",
      biografia: "Olooooco, bixo!",
      alt: "Imagem do desenvolvedor",
      cor: "#006732"
    },
    {
      imagem: 'assets/devs/raul.jpg',
      nome: "Raul Domingues",
      profissao: "Desenvolvedor Full Stack, Angular, Nest, Fastify, Express.JS",
      biografia: "O BRABO!",
      alt: "Imagem do desenvolvedor",
      cor: "rebeccapurple"
    }
  ]
}
