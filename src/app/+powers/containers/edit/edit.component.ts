import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";

import {Observable} from "rxjs/Observable";
import {first, map, switchMap, tap} from "rxjs/operators";

import {Power} from "../../../core/models/power.model";
import {PowersService} from "../../../core/services/powers.service";
import {LoadPower, SelectPower, UpdatePower} from "../../../state/powers/actions/powers";
import {getPowersTotal, getSelectedPower, PowersState} from "../../../state/powers/reducers";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  power: Observable<Power>;

  constructor(private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar,
              private powersService: PowersService,
              private store: Store<PowersState>) {
  }

  ngOnInit() {
    // debugger;
    this.power = this.activatedRoute.paramMap
      .pipe(
        tap(paramMap => this.store.dispatch(new SelectPower({id: Number(paramMap.get('id'))}))),
        tap(paramMap => {
          this.hasPowersInStore()
            .subscribe(exists => {
              // debugger;
              if (!exists) {
                this.store.dispatch(new LoadPower({id: parseInt(paramMap.get('id'))}));
              }
            });
        }),
        switchMap(paramMap => this.store.select(getSelectedPower))
      );
  }

  hasPowersInStore(): Observable<boolean> {
    // debugger;
    return this.store.select(getPowersTotal)
      .pipe(
        first(),
        map(total => total > 0)
      )
  }

  onPowerChange(power: Power) {
    // debugger;
    this.store.dispatch(new UpdatePower(power));
    // this.powersService.updatePower(power)
    //   .subscribe(() => this.matSnackBar.open( 'Power Saved', 'Success', {
    //     duration: 2000
    //   }));
  }

}
