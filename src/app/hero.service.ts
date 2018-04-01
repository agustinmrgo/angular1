import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';
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
}
