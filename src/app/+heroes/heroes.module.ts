import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './containers/index/index.component';
import {MatCardModule, MatIconModule, MatListModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {HeroesComponent} from './components/heroes/heroes.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {HeroesRoutingModule} from "./heroes-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  declarations: [IndexComponent, HeroesComponent]
})
export class HeroesModule { }
