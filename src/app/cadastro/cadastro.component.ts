import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudPokemonService } from '../services/crud-pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ CrudPokemonService ]
})
export class CadastroComponent implements OnInit {

  @Input() model  = new Pokemon();

  constructor(private crudPokemonService: CrudPokemonService){}

  ngOnInit(): void {

  }

  public onSubmit(form){
    console.log(form.value);
    this.crudPokemonService.post(form.value);
  }

}
