import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  constructor(private http: HttpClient) {}

  buscarProjetos(): Observable<any>
  {
    return this.http.get(`${environment.apiUrl}projeto`);
  }

  CriarProjeto(nome: string, imagem: File, texto: string, cliente: string): Observable<any>
  {
    return this.http.post(`${environment.apiUrl}projeto`, {
     nome,
     imagem,
     texto,
     cliente
    });
  }
}
