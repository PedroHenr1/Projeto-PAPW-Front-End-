import {Component, OnInit, ViewChild} from '@angular/core';
import {JwtSecurityService} from '../../services/jwt/jwt-security.service';
import {HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../services/pessoa/pessoa.service';
import {SucessMsgComponent} from '../../compartilhado/sucess-msg/sucess-msg.component';
import {ErrorMsgComponent} from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-auth-config',
  templateUrl: './auth-config.component.html',
  styleUrls: ['./auth-config.component.css']
})
export class AuthConfigComponent implements OnInit
{
  formularioLogin: FormGroup;
  authRequest:any;
  @ViewChild(SucessMsgComponent) msgSucess: SucessMsgComponent;
  @ViewChild(ErrorMsgComponent) msgError: ErrorMsgComponent;

  constructor(private authService:JwtSecurityService, private pessoaService: PessoaService)
  {
    this.formularioLogin = new FormGroup({
      "pessoaEmail": new FormControl(null,  Validators.required),
      "pessoaSenha": new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onLoginSubmit()
  {
    if(this.pessoaService.userOnline()) return console.log('erro');

    let data = `
    {
      "pessoaEmail": "${this.formularioLogin.value.pessoaEmail}",
      "pessoaSenha": "${this.formularioLogin.value.pessoaSenha}"
    }`;
    this.getACessToken(JSON.parse(data));
  }

  public getACessToken(authRequest)
  {
    let resp = this.authService.gerarToken(authRequest);

    resp.subscribe(data => localStorage.setItem('Token', data.toString()), () => {this.msgError.setError('Erro na autenticação.')});
  }

  /*public acessarApi(urlApi, token)
  {
    let res = this.authService.entrarApi(urlApi, token);
    res.subscribe(data=>localStorage.setItem('Token', token));
  }*/

}
