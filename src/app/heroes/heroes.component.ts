import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //importo clase Hero !
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', //selector de CSS 
  templateUrl: './heroes.component.html', //ubicacion del html
  styleUrls: ['./heroes.component.css'] //ubicacion del css
})
export class HeroesComponent implements OnInit { //implementa interfaz OnInit (lifecycle hook es ngOnInit)

  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };
  
  heroes = HEROES;

  selectedHero : Hero;
  onSelect (hero : Hero): void {
    this.selectedHero = hero;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
