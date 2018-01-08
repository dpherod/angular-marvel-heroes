import {Injectable} from "@angular/core";
import {MatDialog, MatSnackBar} from "@angular/material";
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {map, switchMap, tap} from "rxjs/operators";
import {PowersService} from "../../../core/services/powers.service";
import {AddPowerComponent} from "../../../shared/dialogs/add-power/add-power.component";
import {SnackbarOpen} from "../../shared/actions/snackbar";
import {
  ADD_POWER, ADD_POWER_DIALOG_CLOSE, ADD_POWER_DIALOG_OPEN, ADD_POWER_SUCCESS, AddPower, AddPowerDialogClose,
  AddPowerSuccess, DELETE_POWER, DeletePower, DeletePowerSuccess, LOAD_POWER, LOAD_POWERS, LoadPower,
  LoadPowersSuccess, LoadPowerSuccess, UPDATE_POWER, UPDATE_POWER_SUCCESS, UpdatePower, UpdatePowerSuccess
} from "../actions/powers";

@Injectable()
export class PowersEffects {

  @Effect()
  addPower: Observable<Action> = this.actions.ofType<AddPower>(ADD_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.createPower(power)),
      map(power => new AddPowerSuccess(power))
    );

  @Effect()
  addPowerSuccess: Observable<any> = this.actions.ofType<AddPowerSuccess>(ADD_POWER_SUCCESS)
    .pipe(
      map(() => new SnackbarOpen({
        message: 'Power Created',
        action: 'Success'
      })),
      map(() => new AddPowerDialogClose())
    );

  @Effect()
  deletePower: Observable<Action> = this.actions.ofType(DELETE_POWER)
    .pipe(
      map((action: DeletePower) => action.payload),
      switchMap(power => this.powersService.deletePower(power)),
      map(power => new DeletePowerSuccess(power))
    );

  @Effect({
    dispatch: false
  })
  addPowerDialogClose: Observable<any> = this.actions.ofType(ADD_POWER_DIALOG_CLOSE)
    .pipe(
      // map( (action: AddPowerDialogClose) => action.payload),
      // tap( (payload => payload.close())
      tap(() => this.matDialog.closeAll())
    );

  @Effect({
    dispatch: false
  })
  addPowerDialogOpen: Observable<Action> = this.actions.ofType(ADD_POWER_DIALOG_OPEN)
    .pipe(
      tap(() => this.matDialog.open(AddPowerComponent))
    );

  @Effect()
  loadPower: Observable<Action> = this.actions.ofType<LoadPower>(LOAD_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(payload => this.powersService.getPower(payload.id)),
      map(power => new LoadPowerSuccess(power))
    );


  @Effect()
  loadPowers: Observable<Action> = this.actions.ofType(LOAD_POWERS)
    .pipe(
      switchMap(() => this.powersService.getPowers()),
      map(powers => new LoadPowersSuccess(powers))
    );

  @Effect()
  updatePower: Observable<Action> = this.actions.ofType<UpdatePower>(UPDATE_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.updatePower(power)),
      map(power => new UpdatePowerSuccess(power))
    );

  @Effect()
  updatePowerSuccess: Observable<Action> = this.actions.ofType<UpdatePowerSuccess>(UPDATE_POWER_SUCCESS)
    .pipe(
      map(() => new SnackbarOpen({
        message: 'Power Updated',
        action: 'Success'
      }))
    );

  constructor(private actions: Actions,
              private matDialog: MatDialog,
              private matSnackBar: MatSnackBar,
              private powersService: PowersService) {
  }
}
