import { ContatoService } from './../../services/contatos/contato.service';
import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../services/projetos/projeto.service';
import { Projeto } from '../../models/projeto.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  title = 'portfolio_frontend';
  cardList = Array.from({ length: 100 }).fill(null);
  public projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService, private contatoService: ContatoService){}

  ngOnInit(): void {
    // this.projetoService.buscarProjetos().subscribe({
    //   next: (response) => {
    //     this.projetos = response;
    //   },
    //   error: (error) => console.log(error)
    // })
  }
}
