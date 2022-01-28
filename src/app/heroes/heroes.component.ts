import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroi } from '../models/hero'
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  herois: Heroi[]=[];
  herois$?: Observable<Heroi[]>
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroi();
  }

  getHeroi(): void{
    this.herois$ = this.heroService.getHerois()//.subscribe((heroico)=>this.herois = heroico);
   }

}
