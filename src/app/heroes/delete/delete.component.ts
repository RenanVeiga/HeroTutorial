import { Component, Input, OnInit } from '@angular/core';
import { Heroi } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() id:number = 1;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.heroService.deleteHero(this.id).subscribe();
  }

}
