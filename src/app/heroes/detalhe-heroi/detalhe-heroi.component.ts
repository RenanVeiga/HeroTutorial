import { Heroi } from '../../models/hero';
import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhe-heroi',
  templateUrl: './detalhe-heroi.component.html',
  styleUrls: ['./detalhe-heroi.component.scss'],
})
export class DetalheHeroiComponent implements OnInit {
  heroi?: Heroi;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroiById();
  }

  getHeroiById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService
      .getHeroiById(id)
      .subscribe((heroi) => (this.heroi = heroi));
  }

  onEdit() : void {
      if (this.heroi) {

        this.heroService.modifyHero(this.heroi)
        .subscribe(() => this.goBack());
      }
    }


  goBack(): void {
    this.location.back();
  }
}
