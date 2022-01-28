import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheHeroiComponent } from './heroes/detalhe-heroi/detalhe-heroi.component';
import { AddHeroComponent } from './heroes/add-hero/add-hero.component';
import { DeleteComponent } from './heroes/delete/delete.component';
import { TesteComponent } from './grid/teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetalheHeroiComponent,
    MessageComponent,
    DashboardComponent,
    AddHeroComponent,
    DeleteComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
