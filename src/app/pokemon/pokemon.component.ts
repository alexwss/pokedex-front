import { Component, OnInit, Input } from '@angular/core';
import { CrudPokemonService } from '../services/crud-pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [CrudPokemonService]
})
export class PokemonComponent implements OnInit {

  constructor(private crudPokemonService: CrudPokemonService) { }

  @Input() textToFind: String;

  @Input() pokemons: Array<Pokemon>;

  ngOnInit(): void {
    this.pokemons = [];
    this.pokemons.push({id: 1, name: "pokemon 1", power: 15});
  }

  public async findPokemon() {
    this.pokemons = await this.crudPokemonService.findPokemonByName(this.textToFind);
  }

  public async delete(poke: Pokemon, index: number){
    await this.crudPokemonService.delete(poke);
    this.pokemons.slice(index, 1);
    console.log(this.pokemons);
   // this.pokemons = <Array<Pokemon>> this.pokemons;
  }

}
