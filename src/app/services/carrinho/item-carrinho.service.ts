import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ItemCarrinho} from '../../interfaces/item-carrinho';

@Injectable({
  providedIn: 'root'
})
export class ItemCarrinhoService {

  constructor(private http: HttpClient) { }

    addItemCarrinho(itemCarrinho: ItemCarrinho): Observable<ItemCarrinho>
  {
    const req = `${environment.produtoApiUrl}cruzada/app/itemcart`;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<ItemCarrinho>(req, {headers});
  }

  listaCarrinho(): Observable<ItemCarrinho[]>
  {
    const req = `${environment.produtoApiUrl}cruzada/app/itemcart`;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<ItemCarrinho[]>(req, {headers});
  }

  removeProdutoCarrinho(id: number): Observable<void>
  {
    const req = `${environment.produtoApiUrl}cruzada/app/itemcart-` + id;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    location.reload(true);
    return this.http.delete<void>(req, {headers});
  }
}
