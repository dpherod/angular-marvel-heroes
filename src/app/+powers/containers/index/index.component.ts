import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import {Observable} from "rxjs/Observable";
import {Power} from "../../../core/models/power.model";
import {AddPowerDialogOpen, DeletePower, LoadPowers} from "../../../state/powers/actions/powers";
import {getAllPowers, isPowerLoading, PowersState} from "../../../state/powers/reducers/index";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  loading: Observable<Boolean>;

  powers: Observable<Array<Power>>;

  constructor(private store: Store<PowersState>) {
  }

  ngOnInit() {
    this.loading = this.store.select(isPowerLoading);
    this.powers = this.store.select(getAllPowers);
    this.store.dispatch(new LoadPowers());
  }

  onAdd() {
    // this.matDialog.open(AddPowerComponent);
    this.store.dispatch(new AddPowerDialogOpen());

  }

  onDelete(power: Power) {
    this.store.dispatch(new DeletePower(power))
    // this.powersService.deletePower(power)
    //   .subscribe(() => this.powers = this.powersService.getPowers());
  }

}
