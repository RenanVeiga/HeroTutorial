import { Component, OnInit } from '@angular/core';
import { Heroi } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHeroi({name} as Heroi).subscribe(()=> console.log("enviado"));
  }
}
