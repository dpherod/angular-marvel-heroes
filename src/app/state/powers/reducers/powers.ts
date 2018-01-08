import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Power} from "../../../core/models/power.model";
import {
  ADD_POWER_DIALOG_CLOSE, ADD_POWER_DIALOG_OPEN, DELETE_POWERS_SUCCESS, LOAD_POWER_SUCCESS, LOAD_POWERS_SUCCESS,
  PowersAction, SELECT_POWER, UPDATE_POWER_SUCCESS
} from "../actions/powers";

export interface State extends EntityState<Power> {
  addDialogShow: boolean;
  selectedPowerId: number;
}

export const adapter: EntityAdapter<Power> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  addDialogShow: false,
  selectedPowerId: null
});

export function reducer(state: State = initialState, action: PowersAction) {
  switch (action.type) {
    case ADD_POWER_DIALOG_CLOSE:
      return {...state, addDialogShow: false};
    case ADD_POWER_DIALOG_OPEN:
      return {...state, addDialogShow: true};
    case DELETE_POWERS_SUCCESS:
      return adapter.removeOne(action.payload.id, state)
    case LOAD_POWER_SUCCESS:
      return adapter.addOne(action.payload, state);
    case LOAD_POWERS_SUCCESS:
      return adapter.addAll(action.payload, state);
    case SELECT_POWER:
      return {...state, selectedPowerId: action.payload.id};
    case UPDATE_POWER_SUCCESS:
      return adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state)
    default:
      return state;
  }
}

export const getSelectedPowerId = (state: State) => state.selectedPowerId;
