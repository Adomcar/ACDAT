import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DigitNumberPipe } from "../../pipes/digit-number.pipe";

@Component({
  selector: 'app-pokemon-type',
  standalone: true,
  imports: [NgClass, TitleCasePipe, DigitNumberPipe],
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.css'
 })
 export class PokemonTypeComponent {
  @Input()
  type: string = '';
pokemon: any;
 }
 
