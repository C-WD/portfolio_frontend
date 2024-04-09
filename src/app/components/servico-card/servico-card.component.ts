import { Component, Input } from '@angular/core';
import { Servico } from '../../models/servico.interface';

@Component({
  selector: 'app-servico-card',
  templateUrl: './servico-card.component.html',
  styleUrl: './servico-card.component.scss'
})
export class ServicoCardComponent {
  @Input() servico!: Servico
}
