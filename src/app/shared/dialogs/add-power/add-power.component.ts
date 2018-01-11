import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {Store} from "@ngrx/store";
import {Power} from "../../../core/models/power.model";
import {AddPower, AddPowerDialogClose} from "../../../state/powers/actions/powers";
import {PowersState} from "../../../state/powers/reducers";

@Component({
  templateUrl: './add-power.component.html',
  styleUrls: ['./add-power.component.scss']
})
export class AddPowerComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private matDialogRef: MatDialogRef<AddPowerComponent>,
              private matSnackBar: MatSnackBar,
              private store: Store<PowersState>) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  close() {
    this.store.dispatch(new AddPowerDialogClose());
  }

  onAdd() {
    const power = <Power>this.form.value;
    this.store.dispatch(new AddPower(power));
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close();
  }

}
