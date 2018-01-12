import {Action} from "@ngrx/store";
import {Hero} from "../../../core/models/hero.model";
// import {Power} from "../../../core/models/power.model";
import {createActionType} from "../../shared/utils";


export const ADD_HERO = createActionType('ADD_HERO');
export const ADD_HERO_SUCCESS = createActionType('ADD_HERO_SUCCESS');
export const ADD_HERO_DIALOG_OPEN = createActionType('ADD_HERO_DIALOG_OPEN');
export const ADD_HERO_DIALOG_CLOSE = createActionType('ADD_HERO_DIALOG_CLOSE');
export const DELETE_HERO = createActionType('DELETE_HERO');
export const DELETE_HERO_SUCCESS = createActionType('DELETE_HERO_SUCCESS');
export const LOAD_HERO = createActionType('LOAD_HERO');
export const LOAD_HERO_SUCCESS = createActionType('LOAD_HERO_SUCCESS');
export const LOAD_HEROES = createActionType('LOAD_HEROES');
export const LOAD_HEROES_SUCCESS = createActionType('LOAD_HEROES_SUCCESS');
export const SELECT_HERO = createActionType('SELECT_HERO');
export const UPDATE_HERO = createActionType('UPDATE_HERO');
export const UPDATE_HERO_SUCCESS = createActionType('UPDATE_HERO_SUCCESS');

export class AddHero implements Action {
  readonly type = ADD_HERO;

  constructor(public payload: Hero) {
  }
}

export class AddHeroSuccess implements Action {
  readonly type = ADD_HERO_SUCCESS;

  constructor(public payload: Hero) {
  }
}

export class AddHeroDialogClose implements Action {
  readonly type = ADD_HERO_DIALOG_CLOSE;
  //
  // constructor(public payload: MatDialogRef<AddPowerComponent>) {}
}

export class AddHeroDialogOpen implements Action {
  readonly type = ADD_HERO_DIALOG_OPEN;
}

export class DeleteHero implements Action {
  readonly type = DELETE_HERO;

  constructor(public payload: Hero) {
  }
}

export class DeleteHeroSuccess implements Action {
  readonly type = DELETE_HERO_SUCCESS;

  constructor(public payload: Hero) {
  }
}

export class LoadHero implements Action {
  readonly type = LOAD_HERO;

  constructor(public payload: { id: number }) {
  }
}

export class LoadHeroSuccess implements Action {
  readonly type = LOAD_HERO_SUCCESS;

  constructor(public payload: Hero) {
  }
}

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;

  constructor(public payload: Hero[]) {
  }
}

export class SelectHero implements Action {
  readonly type = SELECT_HERO;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateHero implements Action {
  readonly type = UPDATE_HERO;

  constructor(public payload: Hero) {
  }
}

export class UpdateHeroSuccess implements Action {
  readonly type = UPDATE_HERO_SUCCESS;

  constructor(public payload: Hero) {
  }
}


export type HeroesAction =
  AddHeroDialogClose
  | AddHeroDialogOpen
  | DeleteHero
  | DeleteHeroSuccess
  | LoadHero
  | LoadHeroSuccess
  | LoadHeroes
  | LoadHeroesSuccess
  | SelectHero
  | UpdateHero
  | UpdateHeroSuccess ;
