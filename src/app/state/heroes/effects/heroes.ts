import {Injectable} from "@angular/core";
import {MatDialog, MatSnackBar} from "@angular/material";
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {map, mergeMap, switchMap, tap} from "rxjs/operators";
import {AddHeroComponent} from "../../../+heroes/dialogs/add-hero/add-hero.component";
import {HeroesService} from "../../../core/services/heroes.service";
import {SnackbarOpen} from "../../shared/actions/snackbar";
import {
  ADD_HERO, ADD_HERO_DIALOG_CLOSE, ADD_HERO_DIALOG_OPEN, ADD_HERO_SUCCESS, AddHero, AddHeroDialogClose,
  AddHeroSuccess, DELETE_HERO, DeleteHero, DeleteHeroSuccess, LOAD_HERO, LOAD_HEROES, LoadHero, LoadHeroesSuccess,
  LoadHeroSuccess, UPDATE_HERO, UPDATE_HERO_SUCCESS, UpdateHero, UpdateHeroSuccess
} from "../actions/heroes";

@Injectable()
export class HeroesEffects {

  @Effect()
  addHero: Observable<Action> = this.actions.ofType<AddHero>(ADD_HERO)
    .pipe(
      map(action => action.payload),
      switchMap(hero => this.heroesService.createHero(hero)),
      map(hero => new AddHeroSuccess(hero))
    );

  @Effect()
  addHeroSuccess: Observable<any> = this.actions.ofType<AddHeroSuccess>(ADD_HERO_SUCCESS)
    .pipe(
      mergeMap(() => [
        new SnackbarOpen({
          message: 'Hero Created',
          action: 'Success'
        }),
        new AddHeroDialogClose()
      ])
    );

  @Effect()
  deleteHero: Observable<Action> = this.actions.ofType(DELETE_HERO)
    .pipe(
      map((action: DeleteHero) => action.payload),
      switchMap(hero => this.heroesService.deleteHero(hero)),
      map(hero => new DeleteHeroSuccess(hero))
    );

  @Effect({
    dispatch: false
  })
  addHeroDialogClose: Observable<any> = this.actions.ofType(ADD_HERO_DIALOG_CLOSE)
    .pipe(
      // map( (action: AddHeroDialogClose) => action.payload),
      // tap( (payload => payload.close())
      tap(() => this.matDialog.closeAll())
    );

  @Effect({
    dispatch: false
  })
  addHeroDialogOpen: Observable<Action> = this.actions.ofType(ADD_HERO_DIALOG_OPEN)
    .pipe(
      tap(() => this.matDialog.open(AddHeroComponent))
    );

  @Effect()
  loadHero: Observable<Action> = this.actions.ofType<LoadHero>(LOAD_HERO)
    .pipe(
      map(action => action.payload),
      switchMap(payload => this.heroesService.getHero(payload.id)),
      map(hero => new LoadHeroSuccess(hero))
    );


  @Effect()
  loadHeros: Observable<Action> = this.actions.ofType(LOAD_HEROES)
    .pipe(
      switchMap(() => this.heroesService.getHeroes()),
      map(heroes => new LoadHeroesSuccess(heroes))
    );

  @Effect()
  updateHero: Observable<Action> = this.actions.ofType<UpdateHero>(UPDATE_HERO)
    .pipe(
      map(action => action.payload),
      switchMap(hero => this.heroesService.updateHero(hero)),
      map(hero => new UpdateHeroSuccess(hero))
    );

  @Effect()
  updateHeroSuccess: Observable<Action> = this.actions.ofType<UpdateHeroSuccess>(UPDATE_HERO_SUCCESS)
    .pipe(
      map(() => new SnackbarOpen({
        message: 'Hero Updated',
        action: 'Success'
      }))
    );

  constructor(private actions: Actions,
              private matDialog: MatDialog,
              private matSnackBar: MatSnackBar,
              private heroesService: HeroesService) {
  }
}
