import { Component } from '@angular/core';
import { Header } from '../models/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public headerOpened: boolean = false;
  public mobileFlex: boolean = false;
  timeoutRunning: boolean = false;
  public header: Header =
      {
      logo: "assets/example01.png",
      links: [
        { text: 'Sobre', href: '/sobre' },
        { text: 'Work', href: 'href2' },
        { text: 'Contact', href: 'href2' }
      ]
    }
    toggleHeaderOpened() {
      if (!this.timeoutRunning) {
        if (this.mobileFlex) {
          this.headerOpened = !this.headerOpened;
          this.timeoutRunning = true;

          setTimeout(() => {
            this.mobileFlex = !this.mobileFlex;
            this.timeoutRunning = false;
          }, 400);
        } else {
          this.mobileFlex = !this.mobileFlex;
          this.timeoutRunning = true;

          setTimeout(() => {
            this.headerOpened = !this.headerOpened;
            this.timeoutRunning = false;
          }, 100);
        }
      }
    }
}
