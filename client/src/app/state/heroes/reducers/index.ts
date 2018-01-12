import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromHeroes from "./heroes";

export interface HeroesState {
  heroes: fromHeroes.State;
}

export const reducers = {
  heroes: fromHeroes.reducer
};

export const getHeroesState = createFeatureSelector<HeroesState>('heroes');

export const getHeroesEntityState = createSelector(
  getHeroesState,
  (state) => state.heroes
);

export const {
  selectAll: getAllHeroes,
  selectEntities: getHeroEntities,
  selectIds: getHeroIds,
  selectTotal: getHeroesTotal
} = fromHeroes.adapter.getSelectors(getHeroesEntityState);


export const getSelectedHeroId = createSelector(
  getHeroesEntityState,
  fromHeroes.getSelectedHeroId
);

export const getSelectedHero = createSelector(
  getHeroEntities,
  getSelectedHeroId,
  (entities, selectedHeroId) => entities && entities[selectedHeroId]
);

export const isHeroLoading = createSelector(
  getHeroesEntityState,
  fromHeroes.isLoading
);
