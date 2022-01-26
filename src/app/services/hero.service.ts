import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Heroi } from '../models/hero'
import { ListaHerois } from '../mock-heroes'
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroisUrl = 'api/herois';

  constructor(private messageService: MessageService, private httpCliente: HttpClient) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHerois(): Observable<Heroi[]> {
    return this.httpCliente.get<Heroi[]>(this.heroisUrl)
  }

  getHeroi(id: number): Observable<Heroi> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = ListaHerois.find(h => h.id === id)!;
    this.messageService.add(`HeroService: Heroi add id=${id}`);
    return of(hero);
  }
}
