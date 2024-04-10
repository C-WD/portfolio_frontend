import { Component, Input } from '@angular/core';
import { Biografia } from '../../models/biografia.interface';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrl: './biografia.component.scss'
})
export class BiografiaComponent {
  @Input() biografia!: Biografia;
}
