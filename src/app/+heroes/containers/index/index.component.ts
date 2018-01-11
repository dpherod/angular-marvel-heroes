import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Store} from "@ngrx/store";

import {Observable} from "rxjs/Observable";
import {Hero} from "../../../core/models/hero.model";

import {HeroesService} from "../../../core/services/heroes.service";
import {AddHeroDialogOpen, DeleteHero, LoadHeroes} from "../../../state/heroes/actions/heroes";
import {getAllHeroes, HeroesState} from "../../../state/heroes/reducers";

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  heroes: Observable<Array<Hero>>;

  constructor(private matDialog: MatDialog,
              private heroesService: HeroesService,
              private store: Store<HeroesState>) {
  }

  ngOnInit() {
    // this.heroes = this.heroesService.getHeroes();
    // debugger;
    this.heroes = this.store.select(getAllHeroes);
    console.log('heroes', this.heroes);
    this.store.dispatch(new LoadHeroes());
    // this.loading = this.store.select(isPowerLoading);
    // this.powers = this.store.select(getAllPowers);
    // this.store.dispatch(new LoadPowers());
  }

  onAdd() {
    // debugger;
    this.store.dispatch(new AddHeroDialogOpen());
    // this.matDialog.open(AddHeroComponent);
  }

  // add(hero: Hero) {
  //   this.heroesService.createHero(hero)
  //     .subscribe(() => this.heroes = this.heroesService.getHeroes());
  // }

  delete(hero: Hero) {
    this.store.dispatch(new DeleteHero(hero))
    //
    // this.heroesService.deleteHero(hero)
    //   .subscribe(() => this.heroes = this.heroesService.getHeroes());
  }

}
