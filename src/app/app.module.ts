import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FindComponent } from './pages/find/find.component';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { CadastroAlterarComponent } from './cadastro-alterar/cadastro-alterar.component';
import { ErrorComponent } from './error/error.component';
import { IDidntFoundComponent } from './pages/i-didnt-found/i-didnt-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    FindComponent,
    AddPokemonComponent,
    CadastroAlterarComponent,
    ErrorComponent,
    IDidntFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
