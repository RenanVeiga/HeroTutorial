import { Injectable } from '@angular/core';

import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Heroi } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroisUrl: string = 'http://localhost:3000/heroi';

  constructor(
    private messageService: MessageService,
    private httpCliente: HttpClient
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  addHeroi(heroi: Heroi): Observable<Heroi> {
    return this.httpCliente.post<Heroi>(this.heroisUrl, heroi,  this.httpOptions).pipe(
      tap((heroi: Heroi) => this.log(`heroi adicionado id=${heroi.id}`)),
      catchError(this.handleError<Heroi>('addHeroi'))
    );
   }
  getHerois(): Observable<Heroi[]> {
    return this.httpCliente.get<Heroi[]>(this.heroisUrl).pipe(
      tap((_) => this.log('heróis buscados')),
      catchError(this.handleError<Heroi[]>('getHerois', []))
    );
  }

  getHeroiById(id: number): Observable<Heroi> {
    return this.httpCliente.get<Heroi>(`${this.heroisUrl}/${id}`).pipe(
      tap(_ => this.log(`Herói buscado id=${id}`)),
      catchError(this.handleError<Heroi>(`getHeroiById id=${id}`))
    );;
  }

  modifyHero(heroi: Heroi): Observable<any> {
    return this.httpCliente.put(this.heroisUrl, heroi, this.httpOptions).pipe(
      tap(_ => this.log(`Herói atualizado id=${heroi.id}`)),
      catchError(this.handleError<any>('modifyHero'))
    );;
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
