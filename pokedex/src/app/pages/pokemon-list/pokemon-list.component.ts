import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokeapiService } from '../../services/pokeapi.service';
import { TitleCasePipe } from '@angular/common';
import { DigitNumberPipe } from '../../pipes/digit-number.pipe';
import { PokemonTypeComponent } from '../../components/pokemon-type/pokemon-type.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [TitleCasePipe, DigitNumberPipe, PokemonTypeComponent,
    RouterModule, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  allPokemons: Pokemon[] = [];
  query: string = '';
  filteredPokemons: Pokemon[] = [];
  constructor(private pokeApi: PokeapiService) { }
  async ngOnInit(): Promise<void> {
    this.allPokemons = await this.pokeApi.getAllPokemon();
    this.search();
  }
  search() {
    // Si NO es nulo, vacío o solo tiene espacios en blanco
    if (this.query && this.query.trim()) {
      this.filteredPokemons = this.allPokemons.filter(pokemon =>
        pokemon.name.includes(this.query));
    } else {
      this.filteredPokemons = this.allPokemons;
    }
  }
}

