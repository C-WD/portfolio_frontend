import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-work',
  templateUrl: './latest-work.component.html',
  styleUrl: './latest-work.component.scss'
})
export class LatestWorkComponent {
  rootsrc: string = 'assets/latest-work/';
  rootformat: string = ".png";
  latestWorks = [
    {
      title: 'Free Bird',
      subtitle: 'Lynyrd Skynyrd',
      imageurl: this.rootsrc + 'free_bird.png',
    }
    ,
    {
      title: 'Purple Haze',
      subtitle: 'Jimi Hendrix',
      imageurl: this.rootsrc + 'purple_haze.png',
    }
    ,
    {
      title: 'You Really Got Me',
      subtitle: 'The Kinks',
      imageurl: this.rootsrc + 'you_really_got_me.png',
    }
    ,
    {
      title: 'American Girl',
      subtitle: 'Tom Petty',
      imageurl: this.rootsrc + 'american_girl.png',
    }
    ,
    {
      title: 'Whole Lotta Love',
      subtitle: 'Led Zeppelin',
      imageurl: this.rootsrc + 'whole_lotta_love.png',
    } 
    ,
    {
      title: 'Under Pressure',
      subtitle: 'Queen',
      imageurl: this.rootsrc + 'under_pressure.png',
    }
  ]
}
