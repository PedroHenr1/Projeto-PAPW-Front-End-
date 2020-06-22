import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutoService} from '../../services/produto/produto.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemCarrinho} from '../../interfaces/item-carrinho';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[];
  itemCarrinho: ItemCarrinho = new class implements ItemCarrinho {
    itemCarrinhoId: number;
    itemCarrinhoPessoaId: number;
    itemCarrinhoPreco: number;
    itemCarrinhoProdutoId: Produto;
    itemCarrinhoQuantidade: number;
  };
  formProduto: FormGroup;
  constructor(private produtoService: ProdutoService)
  {
    this.formProduto = new FormGroup({
      "produtoNome": new FormControl(null, Validators.required),
      "produtoValor": new FormControl(null, Validators.required),
      "produtoDescricao": new FormControl(null, Validators.required),
      "produtoEstoque": new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void
  {
    this.getListaProduto();
  }

  saveProduto(produto)
  {
    this.produtoService.addProduto(produto).subscribe();
  }

  getListaProduto()
  {
    this.produtoService.getListProduto().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    }
    );
  }

  deleteProduto(id)
  {
    this.produtoService.deleteProduto(id).subscribe();
  }

  existeProduto(): boolean
  {
    return this.produtos && this.produtos.length > 0;
  }

  saveItemCarrinho(produto: Produto)
  {
    this.produtoService.saveProdutoCarrinho(this.itemCarrinho, produto).subscribe(data=>console.log("funfou"+ data), ()=> "erro");
  }
}
