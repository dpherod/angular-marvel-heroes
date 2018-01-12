import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Hero} from "../../../core/models/hero.model";

import {Power} from "../../../core/models/power.model";

@Component({
  selector: 'app-power-chip-list',
  templateUrl: './power-chip-list.component.html',
  styleUrls: ['./power-chip-list.component.scss']
})
export class PowerChipListComponent implements OnChanges, OnInit {

  @Input() hero: Hero;

  selectedPowers: Power[] = [];

  @Output() powerChange = new EventEmitter<Array<Power>>();

  @Input() powers: Power[];

  constructor() {
  }

  ngOnChanges() {
    if (this.hero && this.powers) {
      this.selectedPowers = this.powers.filter(power => this.hero.powers.indexOf(power.id) > -1);
    }
  }

  ngOnInit() {
  }

  isSelected(power: Power): boolean {
    if (!this.selectedPowers) {
      return false;
    }
    return this.selectedPowers.indexOf(power) > -1
  }

  togglePower(power: Power) {
    if (this.selectedPowers.indexOf(power) > -1) {
      this.selectedPowers.splice(this.selectedPowers.indexOf(power), 1)
    } else {
      this.selectedPowers.push(power);
    }
    this.powerChange.emit(this.selectedPowers);
  }
}
