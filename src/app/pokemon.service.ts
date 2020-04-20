import { Injectable } from '@angular/core';
import Pokedex from '../assets/pokedex.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {
  }

  public getJSON(): Array<Object> {
    return Pokedex;
  }

}
