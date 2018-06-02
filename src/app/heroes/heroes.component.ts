import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // importo clase Hero !
// import { HEROES } from '../mock-heroes'; // importo el array de heroes
import { HeroService } from '../hero.service'; // servicio que actua como proveedor de datos

@Component({
  selector: 'app-heroes', // selector de CSS
  templateUrl: './heroes.component.html', // ubicacion del html
  styleUrls: ['./heroes.component.css'] // ubicacion del css
})
// implementa interfaz OnInit (lifecycle hook es ngOnInit):
export class HeroesComponent implements OnInit {

  /* hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }; */
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  /* Inyecto el servicio: The parameter simultaneously defines a private heroService
  property and identifies it as a HeroService injection site.
  When Angular creates a HeroesComponent, the Dependency Injection
  system sets the heroService parameter to the singleton instance of HeroService */

  ngOnInit() {
    this.getHeroes();
  }
  // metodo llamado en el html cuando clickeo un hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); // arrow function!
  }

}
