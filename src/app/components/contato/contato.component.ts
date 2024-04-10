import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Social } from '../../models/social.interface';
import { ContatoService } from '../../services/contatos/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})

export class ContatoComponent implements OnInit {
  public contatoForm!: FormGroup;
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

  constructor(private renderer: Renderer2, private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatoForm = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mensagem': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      this.contatoService.enviarContato(
        this.contatoForm.get('nome')?.value,
        this.contatoForm.get('email')?.value,
        this.contatoForm.get('mensagem')?.value
      );
    } else {
      Object.keys(this.contatoForm.controls).forEach(field => {
        const control = this.contatoForm.get(field);
        if (control){
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }

  adicionarClasse(target: any) {
    this.renderer.addClass(this.renderer.parentNode(target), 'ativo');
  }

  removerClasse(target: any) {
    if(target.value == ''){
      this.renderer.removeClass(this.renderer.parentNode(target), 'ativo');
    }
  }
}
