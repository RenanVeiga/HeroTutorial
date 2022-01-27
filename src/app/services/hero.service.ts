import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Heroi } from '../models/hero'
import { ListaHerois } from '../mock-heroes'
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroisUrl: string = 'http://localhost:3000/heroi';

  constructor(private messageService: MessageService, private httpCliente: HttpClient) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHerois(): Observable<Heroi[]> {
    return this.httpCliente.get<Heroi[]>(this.heroisUrl)
  }

  getHeroi(id: number): Observable<Heroi> {
    return this.httpCliente.get<Heroi>(`${this.heroisUrl}/${id}`);
  }
}
