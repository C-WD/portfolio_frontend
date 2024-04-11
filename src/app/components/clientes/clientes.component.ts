import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})

export class ClientesComponent{

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  public clientes: Cliente[] = [
    {
      imagem: 'assets/clientes/cliente1.png',
      empresa: 'Google1',
      depoimento: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      nome: "Gemma Nolen",
      nota: 3
    },
    {
      imagem: 'assets/clientes/cliente1.png',
      empresa: 'Google2',
      depoimento: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      nome: "Gemma Nolen",
      nota: 5.0
    },
    {
      imagem: 'assets/clientes/cliente1.png',
      empresa: 'Google3',
      depoimento: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      nome: "Gemma Nolen",
      nota: 2
    },
    {
      imagem: 'assets/clientes/cliente1.png',
      empresa: 'Google4',
      depoimento: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      nome: "Gemma Nolen",
      nota: 3.5
    },
    {
      imagem: 'assets/clientes/cliente1.png',
      empresa: 'Google5',
      depoimento: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      nome: "Gemma Nolen",
      nota: 4.8
    },
    {
      imagem: 'assets/clientes/cliente1.png',
      empresa: 'Google6',
      depoimento: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      nome: "Gemma Nolen",
      nota: 2.8
    },
  ]


  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 68,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
  }
}
