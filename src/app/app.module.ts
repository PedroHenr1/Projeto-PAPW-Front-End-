import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/Http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutoComponent } from './paginas/lista-produto/lista-produto.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { AuthConfigComponent } from './auth/auth-config/auth-config.component';
import { ListaPessoaComponent } from './paginas/lista-pessoa/lista-pessoa.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListaItemCarrinhoComponent } from './paginas/lista-item-carrinho/lista-item-carrinho.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { SucessMsgComponent } from './compartilhado/sucess-msg/sucess-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    RegistrarUsuarioComponent,
    AuthConfigComponent,
    ListaPessoaComponent,
    ListaItemCarrinhoComponent,
    ErrorMsgComponent,
    SucessMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
