import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Pessoa} from '../../interfaces/pessoa';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  pessoaSave(pessoa: Pessoa): Observable<Pessoa>
  {
    pessoa.pessoaIsAdmin = true;
    pessoa.pessoaStatusCadastro = true;
    const req = `${environment.produtoApiUrl}cruzada/app/user`;
    //location.reload(true);
    return this.http.post<Pessoa>(req, pessoa);
  }

  pessoaUpdate(pessoa: Pessoa): Observable<Pessoa>
  {
    const req = `${environment.produtoApiUrl}cruzada/admin/user`;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<Pessoa>(req, pessoa, {headers});
  }
  getListPessoa(): Observable<Pessoa[]>
  {
    const req = `${environment.produtoApiUrl}cruzada/admin/user`;
    let headers = new HttpHeaders();
    const token = localStorage.getItem('Token');
    console.log(token);
    if(token.length > 0)
    {
      let tokenStr = 'Bearer ' + token;
      headers = headers.set('Authorization', tokenStr);
    }
    return this.http.get<Pessoa[]>(req, {headers, responseType: 'json'});
  }

  deletarUsuario(id: number): Observable<void>
  {
    const req = `${environment.produtoApiUrl}cruzada/admin/user-` + id;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    location.reload(true);
    return this.http.delete<void>(req, {headers});

  }

  userOnline(): boolean
  {
    const req = `${environment.produtoApiUrl}cruzada/online`;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return false;
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    this.http.get(req, {headers, responseType: 'json'}).subscribe( data => {
      console.log("teste " + data);
    });
    return true;
  }

  validarCadastroUsuario(id: number): Observable<void>
  {
    const req = `${environment.produtoApiUrl}cruzada/admin/user-` + id;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    location.reload(true);
    return this.http.put<void>(req, null, {headers});
  }
}
