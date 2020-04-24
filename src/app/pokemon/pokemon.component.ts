import { Component, OnInit, Input } from '@angular/core';
import { CrudPokemonService } from '../services/crud-pokemon.service';
import { Pokemon } from '../models/pokemon';
import { CadastroComponent } from '../cadastro/cadastro.component';


import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [CrudPokemonService]
})
export class PokemonComponent implements OnInit {

  constructor(private crudPokemonService: CrudPokemonService, private modalService: NgbModal) { }

  @Input() textToFind: String;

  @Input() pokemons: Array<Pokemon>;

  ngOnInit(): void {
    this.pokemons = [];
    this.pokemons.push({id: 1, name: "pokemon test", power: 15});
  }

  public async findPokemon() {
    this.pokemons = await this.crudPokemonService.findPokemonByName(this.textToFind);
  }

  public async delete(poke: Pokemon, index: number){
    await this.crudPokemonService.delete(poke);
    this.pokemons.splice(this.pokemons.indexOf(poke), 1);
  }

  public async change(){
    const modalRef = this.modalService.open(CadastroComponent);
    modalRef.componentInstance.title = 'Caraio';
  }

}
