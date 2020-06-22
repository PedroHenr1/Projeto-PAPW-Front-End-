import {Produto} from './produto';

export interface ItemCarrinho
{
  itemCarrinhoId: number;
  itemCarrinhoPessoaId: number;
  itemCarrinhoProdutoId: Produto;
  itemCarrinhoQuantidade: number;
  itemCarrinhoPreco: number;

}
