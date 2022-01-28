import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalheHeroiComponent } from '../app/heroes/detalhe-heroi/detalhe-heroi.component'
import { HeroesComponent } from './heroes/heroes.component';
import { TesteComponent } from './grid/teste/teste.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'grid-test', component: TesteComponent},
  { path: 'detail/:id', component: DetalheHeroiComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'herois', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
