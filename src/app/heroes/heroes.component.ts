import { Component, OnInit } from '@angular/core';
import { Heroi } from '../models/hero'
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  herois: Heroi[]=[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroi();
  }

  getHeroi(): void{
    this.heroService.getHerois().subscribe((heroico)=>this.herois = heroico);
   }


}
