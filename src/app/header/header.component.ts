import { Component,} from '@angular/core';
import { Header } from '../models/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public header: Header = 
      {
      logo: "assets/example01.png",
      links: [
        { text: 'About', href: 'href1' },
        { text: 'Work', href: 'href2' },
        { text: 'Contact', href: 'href2' }
      ]
    }
}
