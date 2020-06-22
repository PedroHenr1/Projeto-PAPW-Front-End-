import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthConfigComponent} from '../auth/auth-config/auth-config.component';
import {PessoaService} from '../services/pessoa/pessoa.service';
import {Pessoa} from '../interfaces/pessoa';
import {ErrorMsgComponent} from '../compartilhado/error-msg/error-msg.component';
import {SucessMsgComponent} from '../compartilhado/sucess-msg/sucess-msg.component';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  formRegistroUser: FormGroup;
  @ViewChild(ErrorMsgComponent) errorMsg: ErrorMsgComponent;
  @ViewChild(SucessMsgComponent) msgSucess: SucessMsgComponent;
  constructor(private pessoaService: PessoaService) {
    this.formRegistroUser = new FormGroup({
      "pessoaNome": new FormControl(null, Validators.required),
      "pessoaSobrenome": new FormControl(null, Validators.required),
      "pessoaCpf": new FormControl(null, Validators.required),
      "pessoaEmail": new FormControl(null, Validators.required),
      "pessoaSenha": new FormControl(null, Validators.required),
      "pessoaEndereco": new FormControl(null, Validators.required),
      "pessoaTelefone": new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmitRegistrar(pessoa: Pessoa)
  {
    this.pessoaService.pessoaSave(pessoa).subscribe(data => {this.msgSucess.setMsgSucess('Cadastro Realizado com sucesso.')}, () => {this.errorMsg.setError('Falha ao cadastrar.')});
  }

}
