import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Hero} from "../../../core/models/hero.model";
import {Power} from "../../../core/models/power.model";

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent {

  @Input() hero: Hero;

  @Output() heroChange = new EventEmitter<Hero>();

  @Input() powers: Power[];

  constructor() {
  }

  onPowerChange(powers: Power[]) {
    this.heroChange.emit({
      ...this.hero,
      powers: powers.map(power => power.id)
    });
  }

}
