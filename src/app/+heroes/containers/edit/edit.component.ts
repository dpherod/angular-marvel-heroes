import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";

import {Observable} from "rxjs/Observable";
import {switchMap, tap} from "rxjs/operators";
import {Hero} from "../../../core/models/hero.model";
import {Power} from "../../../core/models/power.model";
import {SelectHero, UpdateHero} from "../../../state/heroes/actions/heroes";
import {getSelectedHero, HeroesState} from "../../../state/heroes/reducers";
import {LoadPowers} from "../../../state/powers/actions/powers";
import {getAllPowers, PowersState} from "../../../state/powers/reducers";

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  hero: Observable<Hero>;

  powers: Observable<Array<Power>>;

  constructor(private activatedRoute: ActivatedRoute,
              // private heroesService: HeroesService,
              private matSnackBar: MatSnackBar,
              // private powersService: PowersService,
              private store: Store<HeroesState | PowersState>) {
  }

  // ngOnInit() {
  //   this.hero = this.activatedRoute.paramMap
  //     .pipe(
  //       switchMap(paramMap => this.heroesService.getHero(parseInt(paramMap.get('id'))))
  //     );
  //   this.powers = this.powersService.getPowers();
  // }

  ngOnInit() {
    this.hero = this.activatedRoute.paramMap
      .pipe(
        tap(paramMap => this.store.dispatch(new SelectHero({id: parseInt(paramMap.get('id'))}))),
        tap(() => this.store.dispatch(new LoadPowers())),
        switchMap(() => this.store.select(getSelectedHero))
      );
    console.log('hero: ', this.hero);
    // this.powers = this.powersService.getPowers();
    this.powers = this.store.select(getAllPowers);
    console.log('powers: ', this.powers);
  }

  onHeroChange(hero: Hero) {
    console.log('!!! onHeroChange!');
    this.store.dispatch(new UpdateHero(hero));
    // this.heroesService.updateHero(hero)
    //   .subscribe( () =>this.matSnackBar.open('Hero Saved', 'Success', {
    //     duration: 2000
    //   }));
  }

// // TODO - implement check for existing hero(es)
//   hasHeroesInStore(): Observable<boolean> {
//     // debugger;
//     return this.store.select(getHeroesTotal)
//       .pipe(
//         first(),
//         map( total => total > 0)
//       )
//   }


  // snip
  // ngOnInit() {
  //   // debugger;
  //   this.power = this.activatedRoute.paramMap
  //     .pipe(
  //       tap( paramMap => this.store.dispatch(new SelectPower( {id: Number(paramMap.get('id')) }))),
  //       tap( paramMap => {
  //         this.hasPowersInStore()
  //           .subscribe( exists => {
  //             // debugger;
  //             if (!exists) {
  //               this.store.dispatch(new LoadPower({id: parseInt(paramMap.get('id'))}));
  //             }
  //           });
  //       }),
  //       switchMap(paramMap => this.store.select(getSelectedPower))
  //     );
  // }

  // end snip

}
