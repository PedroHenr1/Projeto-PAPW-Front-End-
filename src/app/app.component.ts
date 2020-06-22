import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-papw';
  isOnline: boolean;
  mostrarLogin: boolean = true;
  mostrarRegister: boolean = false;
  mostrarPessoas: boolean = false;
  mostrarCarrinho: boolean = false;


  public mostrarForm(id: number)
  {
    switch (id)
    {
      case 1: //Frame login
      {
        this.mostrarRegister = false;
        this.mostrarPessoas = false;
        this.mostrarCarrinho = false;
        this.mostrarLogin = true;
        break;
      }
      case 2: //Frame Registro
      {
        this.mostrarLogin = false;
        this.mostrarPessoas = false;
        this.mostrarCarrinho = false;
        this.mostrarRegister = true;
        break;
      }
      case 3: //Frame Lista Pessoas
      {
        this.mostrarLogin = false;
        this.mostrarRegister = false;
        this.mostrarCarrinho = false;
        this.mostrarPessoas = true;
        break;
      }
      case 4: //Frame Carrinho
      {
        this.mostrarLogin = false;
        this.mostrarRegister = false;
        this.mostrarPessoas = false;
        this.mostrarCarrinho = true;
        break;
      }
      default: break;
    }


  }
}
