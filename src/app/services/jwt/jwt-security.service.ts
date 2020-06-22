import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtSecurityService {

  constructor(private http: HttpClient) { }

  public gerarToken(request){
    const url = `${environment.produtoApiUrl}login`;

    return this.http.post(url, request, {responseType: 'text' as 'json'});
  }

  public entrarApi(urlApi, token)
  {
    let tokenStr = 'Bearer '+token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(urlApi, {headers, responseType: 'text' as 'json'});
  }
}
