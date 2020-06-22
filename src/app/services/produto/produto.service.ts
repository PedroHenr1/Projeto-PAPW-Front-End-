import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../interfaces/produto';
import {ItemCarrinho} from '../../interfaces/item-carrinho';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getListProduto(): Observable<Produto[]>
  {
    const req = `${environment.produtoApiUrl}cruzada/app/produto`;
    return this.http.get<Produto[]>(req);
  }

  getProduto(produtoId: number): Observable<Produto>
  {
    const req = `${environment.produtoApiUrl}cruzada/app/produto/${produtoId}`;
    return this.http.get<Produto>(req);
  }

  addProduto(produto: Produto): Observable<Produto>
  {
    const req = `${environment.produtoApiUrl}cruzada/admin/produto`;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    location.reload(true);
    return this.http.post<Produto>(req, produto, {headers});
  }

  updateProduto(produto: Produto): Observable<Produto>
  {
    const req = `${environment.produtoApiUrl}cruzada/app/produto`;
    return this.http.put<Produto>(req, produto);
  }

  deleteProduto(produtoId: number): Observable<void>
  {
    const req = `${environment.produtoApiUrl}cruzada/admin/produto-` + produtoId;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    location.reload(true);
    return this.http.delete<void>(req, {headers});
  }

  saveProdutoCarrinho(itemCarrinho: ItemCarrinho, produto: Produto): Observable<ItemCarrinho>
  {
    itemCarrinho.itemCarrinhoProdutoId = produto;
    itemCarrinho.itemCarrinhoPreco = produto.produtoValor;
    itemCarrinho.itemCarrinhoQuantidade = 1;
    const req = `${environment.produtoApiUrl}cruzada/app/itemcart`;
    const token = localStorage.getItem('Token');
    if(token == null || token.length < 1) return null;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    location.reload(true);
    return this.http.post<ItemCarrinho>(req, itemCarrinho, {headers});
  }


}

