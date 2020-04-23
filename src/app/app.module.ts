import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    FindComponent,
    AddPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
