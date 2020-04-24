import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class CrudPokemonService {

  constructor(private http: HttpClient) { }

  public post(pokemon: Pokemon){
    return this.http.post("http://localhost:8080/pokedex", pokemon).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  public async findPokemonByName(name: String){
    return <Array<Pokemon>> await this.http.get("http://localhost:8080/pokedex/find/"+name).toPromise();
  }

  public async delete(pokemon: Pokemon){

    await this.http.delete("http://localhost:8080/pokedex/"+pokemon.id).subscribe(
      (response) => console.log(response),
      (error) => console.log("deu ruim") );

  }

  public async update(pokemon: Pokemon){
    await this.http.put("http://localhost:8080/pokedex/" + pokemon.id, pokemon).subscribe(
      (response) => console.log("deu bom ?"+response.toString),
      (error) => console.log("deu ruim marquinho, " + JSON.stringify(error))
    );
  }

}
