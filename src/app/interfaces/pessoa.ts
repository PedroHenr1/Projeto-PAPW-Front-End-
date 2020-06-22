export interface Pessoa
{
  pessoaId: number;
  pessoaNome: string;
  pessoaSobrenome: string;
  pessoaCpf: string;
  
  pessoaEmail: string;
  pessoaSenha: string;

  pessoaEndereco: string;
  pessoaTelefone: string;

  pessoaIsAdmin: boolean;
  pessoaStatusCadastro: boolean;
}
