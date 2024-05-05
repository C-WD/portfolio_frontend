import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

hero = {
  topText: 'Branding | Image making',
  titleText:'My awesome portfolio',
  obsText:'And I made it myself! Yes. In Figma with Anima',
  heroImg:{
    src:'assets/hero/hero-image.png',
    alt:"hero banner illustration with some balls and exotic shapes on the inside of them like child's toys"
  }
}

}
