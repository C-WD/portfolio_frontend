import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'portfolio_frontend';
  cardList = Array.from({ length: 100 }).fill(null);
}
