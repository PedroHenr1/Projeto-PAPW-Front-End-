import { Component, OnInit } from '@angular/core';
import {ItemCarrinhoService} from '../../services/carrinho/item-carrinho.service';
import {ItemCarrinho} from '../../interfaces/item-carrinho';

@Component({
  selector: 'app-lista-item-carrinho',
  templateUrl: './lista-item-carrinho.component.html',
  styleUrls: ['./lista-item-carrinho.component.css']
})
export class ListaItemCarrinhoComponent implements OnInit
{
  public itemsCarrinho: ItemCarrinho[];
  public valorTotal: number;
  constructor(private itemCarrinhoService: ItemCarrinhoService) { }
  ngOnInit(): void {
    this.listarItemsCarrinho();
  }

  listarItemsCarrinho()
  {
    this.itemCarrinhoService.listaCarrinho().subscribe((itemsCarrinho: ItemCarrinho[]) => {
      this.itemsCarrinho = itemsCarrinho;
      this.itemsCarrinho.forEach((item)=>{
        this.valorTotal += item.itemCarrinhoProdutoId.produtoValor;
      });
    });
  }

  removeItemCarrinho(id: number)
  {
    this.itemCarrinhoService.removeProdutoCarrinho(id).subscribe();
  }
}
