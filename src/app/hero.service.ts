import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes (): Observable<Hero[]> {
    // mensaje enviado despues de obtener los heroes de la bd (?
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`); // simbolos ` define un "literal" en ES6
    return of(HEROES.find(hero => hero.id === id));
  }

}
