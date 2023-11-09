import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { CalcularmediaComponent } from './calcularmedia/calcularmedia.component';
import { ApoliceseguroComponent } from './apoliceseguro/apoliceseguro.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-pai/tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-pai/tela-filho2/tela-filho2.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule } from  '@angular/common/http';
import { UsuarioDetalhesComponent } from './usuario/usuario-detalhes/usuario-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ListaClienteComponent,
    CalculadoraComponent,
    CalcularmediaComponent,
    ApoliceseguroComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    TelaPaiComponent,
    TelaFilho1Component,
    TelaFilho2Component,
    CadastroAlunoComponent,
    ListaTarefasComponent,
    UsuarioComponent,
    UsuarioDetalhesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
