import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { FindComponent } from './pages/find/find.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home'},
  { path: 'add-pokemon', component: AddPokemonComponent},
  { path: 'find', component: FindComponent },
  { path: 'home', component: HomeComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
