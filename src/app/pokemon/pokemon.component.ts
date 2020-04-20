import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [ PokemonService ]
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  @Input() pokemons: Array<Object>;

  ngOnInit(): void {

    this.pokemons = this.pokemonService.getJSON();

  }

}
