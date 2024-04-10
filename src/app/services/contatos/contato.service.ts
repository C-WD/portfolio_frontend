import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  constructor(private http: HttpClient) {}

  enviarContato(nome: string, email: string, mensagem: string): void
  {
    this.http.post(`${environment.apiUrl}contato`, {
      nome, email, mensagem
    }).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    })
  }
}
