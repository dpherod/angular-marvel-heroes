import {createFeatureSelector, createSelector} from "@ngrx/store";
import {getSelectedHeroId} from "../../heroes/reducers";
import * as fromPowers from "./powers";

export interface PowersState {
  powers: fromPowers.State;
}

export const reducers = {
  powers: fromPowers.reducer
};

export const getPowersState = createFeatureSelector<PowersState>('powers');

export const getPowersEntityState = createSelector(
  getPowersState,
  (state) => state.powers
);

export const {
  selectAll: getAllPowers,
  selectEntities: getPowerEntities,
  selectIds: getPowerIds,
  selectTotal: getPowersTotal
} = fromPowers.adapter.getSelectors(getPowersEntityState);

export const getSelectedPowerId = createSelector(
  getPowersEntityState,
  fromPowers.getSelectedPowerId
);

export const getSelectedPower = createSelector(
  getPowerEntities,
  getSelectedPowerId,
  (entities, selectedPowerId) => entities && entities[selectedPowerId]
);

export const getPowersForSelectedHero = createSelector(
  getPowerEntities,
  getSelectedHeroId,
  (entities, selectedHeroId) => entities && entities[selectedHeroId]
);

export const isPowerLoading = createSelector(
  getPowersEntityState,
  fromPowers.isLoading
);
