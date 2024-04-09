import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  constructor(private http: HttpClient) {}

  enviarContato(nome: string, email: string, mensagem: string): Observable<any>
  {
    return this.http.post(`${environment.apiUrl}contato`, {
      nome, email, mensagem
    })
  }
}
