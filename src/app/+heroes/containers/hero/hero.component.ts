import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import "rxjs/add/observable/of";

import {Observable} from "rxjs/Observable";
import {switchMap, tap} from "rxjs/operators";
import {Hero} from "../../../core/models/hero.model";
import {Power} from "../../../core/models/power.model";

import {HeroesService} from "../../../core/services/heroes.service";
import {PowersService} from "../../../core/services/powers.service";
import {DeleteHero, SelectHero} from "../../../state/heroes/actions/heroes";
import {getSelectedHero, HeroesState} from "../../../state/heroes/reducers";

@Component({
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero: Observable<Hero>;

  powers: Observable<Array<Power>>;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private powersService: PowersService,
              private router: Router,
              private store: Store<HeroesState>) {
  }

  onDelete(hero: Hero) {
    this.store.dispatch(new DeleteHero(hero));

    // this.heroesService.deleteHero(hero)
    //   .subscribe(() => this.router.navigate(['/heroes']));
  }

  ngOnInit() {
    const myId = 15;
    this.hero = this.activatedRoute.paramMap
      .pipe(
        tap(paramMap => this.store.dispatch(new SelectHero({id: parseInt(paramMap.get('id'))}))),
        // tap( () =>  this.store.dispatch(new LoadPowers())),
        switchMap(() => this.store.select(getSelectedHero)),
        // Share no es bueno here.  discuss?
        // share()
      );
    // this.powers = this.activatedRoute.paramMap
    //   .pipe(
    //     // tap( () => this.store.dispatch(new LoadPowers())),
    //     // switchMap( paramMap => this.store.select(getPowersForSelectedHero(myId))))
    //
    //   //       // return this.store.dispatch(new SelectPower({id: parseInt(power.get('id'))}))
    //   //       //TODO - redux this for shizzle....
    //   //       // tap( paramMap => this.store.dispatch(new SelectPower({id: parseInt(paramMap.get('id'))}))),
    //   //       //   // tap( () =>  this.store.dispatch(new LoadPowers())),
    //   //       //   switchMap( () => this.store.select(getSelectedPower))
    //         return this.powersService.getPower(power)
    //           .pipe(
    //             catchError(error => {
    //               console.error(error);
    //               return of (undefined);
    //               // return Observable.of(undefined);  demo two methods of import/declaration static methods
    //             })
    //           );
    //       })
    //     )),
    //     map(powers => powers.filter(power => power !== undefined));
  }
}
