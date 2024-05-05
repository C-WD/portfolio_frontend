import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  rootsrc: string = 'assets/references/';
  images: string[] = [
    'Behance',
    'Google',
    'Apple',
    'Dribbble',
    'Awwwards',
  ]

}
