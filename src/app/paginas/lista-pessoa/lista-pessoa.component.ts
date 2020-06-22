import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../../services/pessoa/pessoa.service';
import {Pessoa} from '../../interfaces/pessoa';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  public pessoas: Pessoa[];
  formLista: FormGroup;
  constructor(private pessoaService: PessoaService)
  {
    this.formLista = new FormGroup({
      "pessoaNome": new FormControl(null, Validators.required),
      "pessoaSobrenome": new FormControl(null, Validators.required),
      "pessoaCpf": new FormControl(null, Validators.required),
      "pessoaEmail": new FormControl(null, Validators.required),
      "pessoaEndereco": new FormControl(null, Validators.required),
      "pessoaTelefone": new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void
  {
    this.getListaPessoa();
  }

  getListaPessoa()
  {
    this.pessoaService.getListPessoa().subscribe((pessoas: Pessoa[]) => {
        this.pessoas = pessoas;
      });
  }


  atualizarUsuario(pessoa)
  {
    this.pessoaService.pessoaUpdate(pessoa).subscribe();
  }

  existePessoa(): boolean
  {
    return this.pessoas && this.pessoas.length > 0;
  }

  validarCadastroUsuario(id: number)
  {
    this.pessoaService.validarCadastroUsuario(id).subscribe();
  }

  deletarUsuario(id: number)
  {
    this.pessoaService.deletarUsuario(id).subscribe();
  }
}
