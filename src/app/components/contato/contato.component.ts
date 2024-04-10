import { Component, Renderer2 } from '@angular/core';
import { Social } from '../../models/social.interface';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

  constructor(private renderer: Renderer2){}

  public nome: string = "";
  public email: string = "";
  public mensagem: string = "";

  public listaClasses: string[] = [];

  public socials: Social[] = [
    {
      nome: "Discord",
      imagem: "assets/icons/discord.svg",
      link: "https://discord.com/"
    },
    {
      nome: "Facebook",
      imagem: "assets/icons/facebook.svg",
      link: "https://www.facebook.com/"
    },
    {
      nome: "Instagram",
      imagem: "assets/icons/instagram.svg",
      link: "https://www.instagram.com/"
    },
  ];

  public enviarContato(): void
  {
    console.log(this.nome);
    console.log(this.email);
    console.log(this.mensagem);
  }

  public onFocus(evento: FocusEvent){
    if(evento.target instanceof HTMLInputElement){
      this.listaClasses.push(evento.target.name);
    }
  }

  adicionarClasse(event: any) {
    this.renderer.addClass(this.renderer.parentNode(event), 'ativo');
  }

  removerClasse(event: any) {
    this.renderer.removeClass(this.renderer.parentNode(event), 'ativo');
  }
}
