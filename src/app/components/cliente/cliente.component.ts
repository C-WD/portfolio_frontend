import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit{
  @Input() cliente!: Cliente;
  public arrayDeNotas: number[] = [];

  ngOnInit(): void {
    if (this.cliente){
      const nota = this.cliente.nota;
      const divisaoInteiro = Math.floor(nota);
      const resto = nota - divisaoInteiro;
      this.arrayDeNotas = Array(divisaoInteiro).fill(100);
      if (resto !== 0) {
        this.arrayDeNotas.push(Math.floor(resto * 100));
      }
      if (this.arrayDeNotas.length < 5) {
        const elementosRestantes = 5 - this.arrayDeNotas.length;
        for (let i = 0; i < elementosRestantes; i++) {
          this.arrayDeNotas.push(0);
        }
      }
    }
  }

}
