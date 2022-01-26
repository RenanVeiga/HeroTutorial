import { Heroi } from './../models/hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  herois: Heroi[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHerois()
      .subscribe(herois => this.herois = herois.slice(1, 5));
  }
}
